// prisma/seed.js
// Seed user + dummy produk data

const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  // 1. Create admin user
  const username = 'gibfathoni';
  const rawPassword = 'admin#123';

  const passwordHash = await bcrypt.hash(rawPassword, 10);

  const user = await prisma.users.upsert({
    where: { username },
    update: {},
    create: {
      username,
      password: passwordHash,
    },
  });

  console.log('User upserted:', user.username);

  // 2. Create dummy products
  const ranks = [
    'Warrior',
    'Elite',
    'Master',
    'Grandmaster',
    'Epic',
    'Legend',
    'Mythic',
    'Mythic Glory',
    'Mythical Honor',
    'Mythical Immortal',
  ];

  const imageUrls = [
    'http://localhost:9000/merz-image/produk/1763382876781-afb6bc43-7919-4ca8-94f2-4877797f4d99-1761565571992-bcfcc564-2c04-4fe8-8d9c-39d629e3a04f-6228909375272109872.jpg',
    'http://localhost:9000/merz-image/produk/1763382876813-d38d6bbc-5589-4382-b2b2-33fdbf2e1a97-new_template.jpg',
  ];

  const products = [];

  for (let i = 1; i <= 10; i++) {
    const rank = ranks[(i - 1) % ranks.length];
    const basePrice = 50000 + i * 10000;
    const diskon = i % 3 === 0 ? 10 : 0;

    const imgUrl = imageUrls[i % imageUrls.length];

    const produk = await prisma.produk.create({
      data: {
        nama: `Dummy Akun ML #${i}`,
        harga_rupiah: basePrice,
        harga_ringgit: Math.round(basePrice / 1200),
        harga_dolar: Math.round(basePrice / 15000),
        deskripsi: `Akun dummy Mobile Legends nomor ${i} dengan rank ${rank}.`,
        rank,
        status: true,
        diskon,
        highlight: i % 4 === 0,
        author_id: user.id,
        // optional fields kalau sudah ada di DB
        email_akun: `dummy${i}@example.com`,
        password_akun: `DummyPass${i}!`,
        produkimg: {
          create: [
            {
              link: imgUrl,
              urutan: 1,
            },
          ],
        },
      },
      include: {
        produkimg: true,
      },
    });

    products.push(produk);
    console.log('Created produk:', produk.nama);
  }

  // 3. Optional: simple banner / pengumuman / kode_promo
  await prisma.banner.createMany({
    data: [
      { url: 'https://example.com/banner-ml-1.jpg', highlight: true },
      { url: 'https://example.com/banner-ml-2.jpg', highlight: false },
    ],
    skipDuplicates: true,
  });

  await prisma.pengumuman.createMany({
    data: [
      { pengumuman: 'Promo pembukaan toko, diskon hingga 20% untuk akun ML terpilih.', highlight: true },
      { pengumuman: 'Maintenance jadwal rutin setiap hari Senin pukul 02.00-04.00 WIB.', highlight: false },
    ],
  });

  await prisma.kode_promo.createMany({
    data: [
      { kode: 'PROMO10', diskon: 10 },
      { kode: 'PROMO20', diskon: 20 },
    ],
    skipDuplicates: true,
  });

  console.log('Seed selesai.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
