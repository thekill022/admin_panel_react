
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model hero
 * 
 */
export type hero = $Result.DefaultSelection<Prisma.$heroPayload>
/**
 * Model produk
 * 
 */
export type produk = $Result.DefaultSelection<Prisma.$produkPayload>
/**
 * Model produkimg
 * 
 */
export type produkimg = $Result.DefaultSelection<Prisma.$produkimgPayload>
/**
 * Model skin
 * 
 */
export type skin = $Result.DefaultSelection<Prisma.$skinPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>
/**
 * Model banner
 * 
 */
export type banner = $Result.DefaultSelection<Prisma.$bannerPayload>
/**
 * Model pengumuman
 * 
 */
export type pengumuman = $Result.DefaultSelection<Prisma.$pengumumanPayload>
/**
 * Model kode_promo
 * 
 */
export type kode_promo = $Result.DefaultSelection<Prisma.$kode_promoPayload>
/**
 * Model flash_sale
 * 
 */
export type flash_sale = $Result.DefaultSelection<Prisma.$flash_salePayload>
/**
 * Model survei
 * 
 */
export type survei = $Result.DefaultSelection<Prisma.$surveiPayload>
/**
 * Model VwSearch
 * 
 */
export type VwSearch = $Result.DefaultSelection<Prisma.$VwSearchPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Heroes
 * const heroes = await prisma.hero.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Heroes
   * const heroes = await prisma.hero.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.hero`: Exposes CRUD operations for the **hero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Heroes
    * const heroes = await prisma.hero.findMany()
    * ```
    */
  get hero(): Prisma.heroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produk`: Exposes CRUD operations for the **produk** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produks
    * const produks = await prisma.produk.findMany()
    * ```
    */
  get produk(): Prisma.produkDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.produkimg`: Exposes CRUD operations for the **produkimg** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Produkimgs
    * const produkimgs = await prisma.produkimg.findMany()
    * ```
    */
  get produkimg(): Prisma.produkimgDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skin`: Exposes CRUD operations for the **skin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skins
    * const skins = await prisma.skin.findMany()
    * ```
    */
  get skin(): Prisma.skinDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.banner`: Exposes CRUD operations for the **banner** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Banners
    * const banners = await prisma.banner.findMany()
    * ```
    */
  get banner(): Prisma.bannerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pengumuman`: Exposes CRUD operations for the **pengumuman** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Pengumumen
    * const pengumumen = await prisma.pengumuman.findMany()
    * ```
    */
  get pengumuman(): Prisma.pengumumanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.kode_promo`: Exposes CRUD operations for the **kode_promo** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Kode_promos
    * const kode_promos = await prisma.kode_promo.findMany()
    * ```
    */
  get kode_promo(): Prisma.kode_promoDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.flash_sale`: Exposes CRUD operations for the **flash_sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Flash_sales
    * const flash_sales = await prisma.flash_sale.findMany()
    * ```
    */
  get flash_sale(): Prisma.flash_saleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.survei`: Exposes CRUD operations for the **survei** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Surveis
    * const surveis = await prisma.survei.findMany()
    * ```
    */
  get survei(): Prisma.surveiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.vwSearch`: Exposes CRUD operations for the **VwSearch** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VwSearches
    * const vwSearches = await prisma.vwSearch.findMany()
    * ```
    */
  get vwSearch(): Prisma.VwSearchDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    hero: 'hero',
    produk: 'produk',
    produkimg: 'produkimg',
    skin: 'skin',
    users: 'users',
    banner: 'banner',
    pengumuman: 'pengumuman',
    kode_promo: 'kode_promo',
    flash_sale: 'flash_sale',
    survei: 'survei',
    VwSearch: 'VwSearch'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "hero" | "produk" | "produkimg" | "skin" | "users" | "banner" | "pengumuman" | "kode_promo" | "flash_sale" | "survei" | "vwSearch"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      hero: {
        payload: Prisma.$heroPayload<ExtArgs>
        fields: Prisma.heroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.heroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.heroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload>
          }
          findFirst: {
            args: Prisma.heroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.heroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload>
          }
          findMany: {
            args: Prisma.heroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload>[]
          }
          create: {
            args: Prisma.heroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload>
          }
          createMany: {
            args: Prisma.heroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.heroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload>
          }
          update: {
            args: Prisma.heroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload>
          }
          deleteMany: {
            args: Prisma.heroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.heroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.heroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$heroPayload>
          }
          aggregate: {
            args: Prisma.HeroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHero>
          }
          groupBy: {
            args: Prisma.heroGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeroGroupByOutputType>[]
          }
          count: {
            args: Prisma.heroCountArgs<ExtArgs>
            result: $Utils.Optional<HeroCountAggregateOutputType> | number
          }
        }
      }
      produk: {
        payload: Prisma.$produkPayload<ExtArgs>
        fields: Prisma.produkFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produkFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produkFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          findFirst: {
            args: Prisma.produkFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produkFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          findMany: {
            args: Prisma.produkFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>[]
          }
          create: {
            args: Prisma.produkCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          createMany: {
            args: Prisma.produkCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.produkDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          update: {
            args: Prisma.produkUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          deleteMany: {
            args: Prisma.produkDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produkUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.produkUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkPayload>
          }
          aggregate: {
            args: Prisma.ProdukAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduk>
          }
          groupBy: {
            args: Prisma.produkGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdukGroupByOutputType>[]
          }
          count: {
            args: Prisma.produkCountArgs<ExtArgs>
            result: $Utils.Optional<ProdukCountAggregateOutputType> | number
          }
        }
      }
      produkimg: {
        payload: Prisma.$produkimgPayload<ExtArgs>
        fields: Prisma.produkimgFieldRefs
        operations: {
          findUnique: {
            args: Prisma.produkimgFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkimgPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.produkimgFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkimgPayload>
          }
          findFirst: {
            args: Prisma.produkimgFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkimgPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.produkimgFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkimgPayload>
          }
          findMany: {
            args: Prisma.produkimgFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkimgPayload>[]
          }
          create: {
            args: Prisma.produkimgCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkimgPayload>
          }
          createMany: {
            args: Prisma.produkimgCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.produkimgDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkimgPayload>
          }
          update: {
            args: Prisma.produkimgUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkimgPayload>
          }
          deleteMany: {
            args: Prisma.produkimgDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.produkimgUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.produkimgUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$produkimgPayload>
          }
          aggregate: {
            args: Prisma.ProdukimgAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProdukimg>
          }
          groupBy: {
            args: Prisma.produkimgGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProdukimgGroupByOutputType>[]
          }
          count: {
            args: Prisma.produkimgCountArgs<ExtArgs>
            result: $Utils.Optional<ProdukimgCountAggregateOutputType> | number
          }
        }
      }
      skin: {
        payload: Prisma.$skinPayload<ExtArgs>
        fields: Prisma.skinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.skinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.skinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skinPayload>
          }
          findFirst: {
            args: Prisma.skinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.skinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skinPayload>
          }
          findMany: {
            args: Prisma.skinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skinPayload>[]
          }
          create: {
            args: Prisma.skinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skinPayload>
          }
          createMany: {
            args: Prisma.skinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.skinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skinPayload>
          }
          update: {
            args: Prisma.skinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skinPayload>
          }
          deleteMany: {
            args: Prisma.skinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.skinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.skinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$skinPayload>
          }
          aggregate: {
            args: Prisma.SkinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkin>
          }
          groupBy: {
            args: Prisma.skinGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkinGroupByOutputType>[]
          }
          count: {
            args: Prisma.skinCountArgs<ExtArgs>
            result: $Utils.Optional<SkinCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
      banner: {
        payload: Prisma.$bannerPayload<ExtArgs>
        fields: Prisma.bannerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.bannerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.bannerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          findFirst: {
            args: Prisma.bannerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.bannerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          findMany: {
            args: Prisma.bannerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>[]
          }
          create: {
            args: Prisma.bannerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          createMany: {
            args: Prisma.bannerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.bannerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          update: {
            args: Prisma.bannerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          deleteMany: {
            args: Prisma.bannerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.bannerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.bannerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$bannerPayload>
          }
          aggregate: {
            args: Prisma.BannerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBanner>
          }
          groupBy: {
            args: Prisma.bannerGroupByArgs<ExtArgs>
            result: $Utils.Optional<BannerGroupByOutputType>[]
          }
          count: {
            args: Prisma.bannerCountArgs<ExtArgs>
            result: $Utils.Optional<BannerCountAggregateOutputType> | number
          }
        }
      }
      pengumuman: {
        payload: Prisma.$pengumumanPayload<ExtArgs>
        fields: Prisma.pengumumanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.pengumumanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.pengumumanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload>
          }
          findFirst: {
            args: Prisma.pengumumanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.pengumumanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload>
          }
          findMany: {
            args: Prisma.pengumumanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload>[]
          }
          create: {
            args: Prisma.pengumumanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload>
          }
          createMany: {
            args: Prisma.pengumumanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.pengumumanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload>
          }
          update: {
            args: Prisma.pengumumanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload>
          }
          deleteMany: {
            args: Prisma.pengumumanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.pengumumanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.pengumumanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$pengumumanPayload>
          }
          aggregate: {
            args: Prisma.PengumumanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePengumuman>
          }
          groupBy: {
            args: Prisma.pengumumanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PengumumanGroupByOutputType>[]
          }
          count: {
            args: Prisma.pengumumanCountArgs<ExtArgs>
            result: $Utils.Optional<PengumumanCountAggregateOutputType> | number
          }
        }
      }
      kode_promo: {
        payload: Prisma.$kode_promoPayload<ExtArgs>
        fields: Prisma.kode_promoFieldRefs
        operations: {
          findUnique: {
            args: Prisma.kode_promoFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kode_promoPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.kode_promoFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kode_promoPayload>
          }
          findFirst: {
            args: Prisma.kode_promoFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kode_promoPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.kode_promoFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kode_promoPayload>
          }
          findMany: {
            args: Prisma.kode_promoFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kode_promoPayload>[]
          }
          create: {
            args: Prisma.kode_promoCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kode_promoPayload>
          }
          createMany: {
            args: Prisma.kode_promoCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.kode_promoDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kode_promoPayload>
          }
          update: {
            args: Prisma.kode_promoUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kode_promoPayload>
          }
          deleteMany: {
            args: Prisma.kode_promoDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.kode_promoUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.kode_promoUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$kode_promoPayload>
          }
          aggregate: {
            args: Prisma.Kode_promoAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateKode_promo>
          }
          groupBy: {
            args: Prisma.kode_promoGroupByArgs<ExtArgs>
            result: $Utils.Optional<Kode_promoGroupByOutputType>[]
          }
          count: {
            args: Prisma.kode_promoCountArgs<ExtArgs>
            result: $Utils.Optional<Kode_promoCountAggregateOutputType> | number
          }
        }
      }
      flash_sale: {
        payload: Prisma.$flash_salePayload<ExtArgs>
        fields: Prisma.flash_saleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.flash_saleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flash_salePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.flash_saleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flash_salePayload>
          }
          findFirst: {
            args: Prisma.flash_saleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flash_salePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.flash_saleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flash_salePayload>
          }
          findMany: {
            args: Prisma.flash_saleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flash_salePayload>[]
          }
          create: {
            args: Prisma.flash_saleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flash_salePayload>
          }
          createMany: {
            args: Prisma.flash_saleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.flash_saleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flash_salePayload>
          }
          update: {
            args: Prisma.flash_saleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flash_salePayload>
          }
          deleteMany: {
            args: Prisma.flash_saleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.flash_saleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.flash_saleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$flash_salePayload>
          }
          aggregate: {
            args: Prisma.Flash_saleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlash_sale>
          }
          groupBy: {
            args: Prisma.flash_saleGroupByArgs<ExtArgs>
            result: $Utils.Optional<Flash_saleGroupByOutputType>[]
          }
          count: {
            args: Prisma.flash_saleCountArgs<ExtArgs>
            result: $Utils.Optional<Flash_saleCountAggregateOutputType> | number
          }
        }
      }
      survei: {
        payload: Prisma.$surveiPayload<ExtArgs>
        fields: Prisma.surveiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.surveiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surveiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.surveiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surveiPayload>
          }
          findFirst: {
            args: Prisma.surveiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surveiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.surveiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surveiPayload>
          }
          findMany: {
            args: Prisma.surveiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surveiPayload>[]
          }
          create: {
            args: Prisma.surveiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surveiPayload>
          }
          createMany: {
            args: Prisma.surveiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.surveiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surveiPayload>
          }
          update: {
            args: Prisma.surveiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surveiPayload>
          }
          deleteMany: {
            args: Prisma.surveiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.surveiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.surveiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$surveiPayload>
          }
          aggregate: {
            args: Prisma.SurveiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSurvei>
          }
          groupBy: {
            args: Prisma.surveiGroupByArgs<ExtArgs>
            result: $Utils.Optional<SurveiGroupByOutputType>[]
          }
          count: {
            args: Prisma.surveiCountArgs<ExtArgs>
            result: $Utils.Optional<SurveiCountAggregateOutputType> | number
          }
        }
      }
      VwSearch: {
        payload: Prisma.$VwSearchPayload<ExtArgs>
        fields: Prisma.VwSearchFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VwSearchFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VwSearchPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VwSearchFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VwSearchPayload>
          }
          findFirst: {
            args: Prisma.VwSearchFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VwSearchPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VwSearchFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VwSearchPayload>
          }
          findMany: {
            args: Prisma.VwSearchFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VwSearchPayload>[]
          }
          create: {
            args: Prisma.VwSearchCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VwSearchPayload>
          }
          createMany: {
            args: Prisma.VwSearchCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.VwSearchDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VwSearchPayload>
          }
          update: {
            args: Prisma.VwSearchUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VwSearchPayload>
          }
          deleteMany: {
            args: Prisma.VwSearchDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VwSearchUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.VwSearchUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VwSearchPayload>
          }
          aggregate: {
            args: Prisma.VwSearchAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVwSearch>
          }
          groupBy: {
            args: Prisma.VwSearchGroupByArgs<ExtArgs>
            result: $Utils.Optional<VwSearchGroupByOutputType>[]
          }
          count: {
            args: Prisma.VwSearchCountArgs<ExtArgs>
            result: $Utils.Optional<VwSearchCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    hero?: heroOmit
    produk?: produkOmit
    produkimg?: produkimgOmit
    skin?: skinOmit
    users?: usersOmit
    banner?: bannerOmit
    pengumuman?: pengumumanOmit
    kode_promo?: kode_promoOmit
    flash_sale?: flash_saleOmit
    survei?: surveiOmit
    vwSearch?: VwSearchOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProdukCountOutputType
   */

  export type ProdukCountOutputType = {
    produkimg: number
  }

  export type ProdukCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produkimg?: boolean | ProdukCountOutputTypeCountProdukimgArgs
  }

  // Custom InputTypes
  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukCountOutputType
     */
    select?: ProdukCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdukCountOutputType without action
   */
  export type ProdukCountOutputTypeCountProdukimgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkimgWhereInput
  }


  /**
   * Count Type ProdukimgCountOutputType
   */

  export type ProdukimgCountOutputType = {
    hero: number
  }

  export type ProdukimgCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | ProdukimgCountOutputTypeCountHeroArgs
  }

  // Custom InputTypes
  /**
   * ProdukimgCountOutputType without action
   */
  export type ProdukimgCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProdukimgCountOutputType
     */
    select?: ProdukimgCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProdukimgCountOutputType without action
   */
  export type ProdukimgCountOutputTypeCountHeroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: heroWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    produk: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | UsersCountOutputTypeCountProdukArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProdukArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkWhereInput
  }


  /**
   * Models
   */

  /**
   * Model hero
   */

  export type AggregateHero = {
    _count: HeroCountAggregateOutputType | null
    _avg: HeroAvgAggregateOutputType | null
    _sum: HeroSumAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  export type HeroAvgAggregateOutputType = {
    id: number | null
    id_produkimg: number | null
  }

  export type HeroSumAggregateOutputType = {
    id: number | null
    id_produkimg: number | null
  }

  export type HeroMinAggregateOutputType = {
    id: number | null
    nama: string | null
    id_produkimg: number | null
  }

  export type HeroMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    id_produkimg: number | null
  }

  export type HeroCountAggregateOutputType = {
    id: number
    nama: number
    id_produkimg: number
    _all: number
  }


  export type HeroAvgAggregateInputType = {
    id?: true
    id_produkimg?: true
  }

  export type HeroSumAggregateInputType = {
    id?: true
    id_produkimg?: true
  }

  export type HeroMinAggregateInputType = {
    id?: true
    nama?: true
    id_produkimg?: true
  }

  export type HeroMaxAggregateInputType = {
    id?: true
    nama?: true
    id_produkimg?: true
  }

  export type HeroCountAggregateInputType = {
    id?: true
    nama?: true
    id_produkimg?: true
    _all?: true
  }

  export type HeroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which hero to aggregate.
     */
    where?: heroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of heroes to fetch.
     */
    orderBy?: heroOrderByWithRelationInput | heroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: heroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned heroes
    **/
    _count?: true | HeroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HeroAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HeroSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeroMaxAggregateInputType
  }

  export type GetHeroAggregateType<T extends HeroAggregateArgs> = {
        [P in keyof T & keyof AggregateHero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHero[P]>
      : GetScalarType<T[P], AggregateHero[P]>
  }




  export type heroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: heroWhereInput
    orderBy?: heroOrderByWithAggregationInput | heroOrderByWithAggregationInput[]
    by: HeroScalarFieldEnum[] | HeroScalarFieldEnum
    having?: heroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeroCountAggregateInputType | true
    _avg?: HeroAvgAggregateInputType
    _sum?: HeroSumAggregateInputType
    _min?: HeroMinAggregateInputType
    _max?: HeroMaxAggregateInputType
  }

  export type HeroGroupByOutputType = {
    id: number
    nama: string
    id_produkimg: number
    _count: HeroCountAggregateOutputType | null
    _avg: HeroAvgAggregateOutputType | null
    _sum: HeroSumAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  type GetHeroGroupByPayload<T extends heroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeroGroupByOutputType[P]>
            : GetScalarType<T[P], HeroGroupByOutputType[P]>
        }
      >
    >


  export type heroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    id_produkimg?: boolean
    produkimg?: boolean | produkimgDefaultArgs<ExtArgs>
    skin?: boolean | hero$skinArgs<ExtArgs>
  }, ExtArgs["result"]["hero"]>



  export type heroSelectScalar = {
    id?: boolean
    nama?: boolean
    id_produkimg?: boolean
  }

  export type heroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "id_produkimg", ExtArgs["result"]["hero"]>
  export type heroInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produkimg?: boolean | produkimgDefaultArgs<ExtArgs>
    skin?: boolean | hero$skinArgs<ExtArgs>
  }

  export type $heroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "hero"
    objects: {
      produkimg: Prisma.$produkimgPayload<ExtArgs>
      skin: Prisma.$skinPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      id_produkimg: number
    }, ExtArgs["result"]["hero"]>
    composites: {}
  }

  type heroGetPayload<S extends boolean | null | undefined | heroDefaultArgs> = $Result.GetResult<Prisma.$heroPayload, S>

  type heroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<heroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeroCountAggregateInputType | true
    }

  export interface heroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['hero'], meta: { name: 'hero' } }
    /**
     * Find zero or one Hero that matches the filter.
     * @param {heroFindUniqueArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends heroFindUniqueArgs>(args: SelectSubset<T, heroFindUniqueArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {heroFindUniqueOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends heroFindUniqueOrThrowArgs>(args: SelectSubset<T, heroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroFindFirstArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends heroFindFirstArgs>(args?: SelectSubset<T, heroFindFirstArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroFindFirstOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends heroFindFirstOrThrowArgs>(args?: SelectSubset<T, heroFindFirstOrThrowArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Heroes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Heroes
     * const heroes = await prisma.hero.findMany()
     * 
     * // Get first 10 Heroes
     * const heroes = await prisma.hero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heroWithIdOnly = await prisma.hero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends heroFindManyArgs>(args?: SelectSubset<T, heroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hero.
     * @param {heroCreateArgs} args - Arguments to create a Hero.
     * @example
     * // Create one Hero
     * const Hero = await prisma.hero.create({
     *   data: {
     *     // ... data to create a Hero
     *   }
     * })
     * 
     */
    create<T extends heroCreateArgs>(args: SelectSubset<T, heroCreateArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Heroes.
     * @param {heroCreateManyArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends heroCreateManyArgs>(args?: SelectSubset<T, heroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Hero.
     * @param {heroDeleteArgs} args - Arguments to delete one Hero.
     * @example
     * // Delete one Hero
     * const Hero = await prisma.hero.delete({
     *   where: {
     *     // ... filter to delete one Hero
     *   }
     * })
     * 
     */
    delete<T extends heroDeleteArgs>(args: SelectSubset<T, heroDeleteArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hero.
     * @param {heroUpdateArgs} args - Arguments to update one Hero.
     * @example
     * // Update one Hero
     * const hero = await prisma.hero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends heroUpdateArgs>(args: SelectSubset<T, heroUpdateArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Heroes.
     * @param {heroDeleteManyArgs} args - Arguments to filter Heroes to delete.
     * @example
     * // Delete a few Heroes
     * const { count } = await prisma.hero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends heroDeleteManyArgs>(args?: SelectSubset<T, heroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends heroUpdateManyArgs>(args: SelectSubset<T, heroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Hero.
     * @param {heroUpsertArgs} args - Arguments to update or create a Hero.
     * @example
     * // Update or create a Hero
     * const hero = await prisma.hero.upsert({
     *   create: {
     *     // ... data to create a Hero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hero we want to update
     *   }
     * })
     */
    upsert<T extends heroUpsertArgs>(args: SelectSubset<T, heroUpsertArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroCountArgs} args - Arguments to filter Heroes to count.
     * @example
     * // Count the number of Heroes
     * const count = await prisma.hero.count({
     *   where: {
     *     // ... the filter for the Heroes we want to count
     *   }
     * })
    **/
    count<T extends heroCountArgs>(
      args?: Subset<T, heroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HeroAggregateArgs>(args: Subset<T, HeroAggregateArgs>): Prisma.PrismaPromise<GetHeroAggregateType<T>>

    /**
     * Group by Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {heroGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends heroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: heroGroupByArgs['orderBy'] }
        : { orderBy?: heroGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, heroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the hero model
   */
  readonly fields: heroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for hero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__heroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produkimg<T extends produkimgDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produkimgDefaultArgs<ExtArgs>>): Prisma__produkimgClient<$Result.GetResult<Prisma.$produkimgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skin<T extends hero$skinArgs<ExtArgs> = {}>(args?: Subset<T, hero$skinArgs<ExtArgs>>): Prisma__skinClient<$Result.GetResult<Prisma.$skinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the hero model
   */
  interface heroFieldRefs {
    readonly id: FieldRef<"hero", 'Int'>
    readonly nama: FieldRef<"hero", 'String'>
    readonly id_produkimg: FieldRef<"hero", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * hero findUnique
   */
  export type heroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null
    /**
     * Filter, which hero to fetch.
     */
    where: heroWhereUniqueInput
  }

  /**
   * hero findUniqueOrThrow
   */
  export type heroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null
    /**
     * Filter, which hero to fetch.
     */
    where: heroWhereUniqueInput
  }

  /**
   * hero findFirst
   */
  export type heroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null
    /**
     * Filter, which hero to fetch.
     */
    where?: heroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of heroes to fetch.
     */
    orderBy?: heroOrderByWithRelationInput | heroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for heroes.
     */
    cursor?: heroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * hero findFirstOrThrow
   */
  export type heroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null
    /**
     * Filter, which hero to fetch.
     */
    where?: heroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of heroes to fetch.
     */
    orderBy?: heroOrderByWithRelationInput | heroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for heroes.
     */
    cursor?: heroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * hero findMany
   */
  export type heroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null
    /**
     * Filter, which heroes to fetch.
     */
    where?: heroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of heroes to fetch.
     */
    orderBy?: heroOrderByWithRelationInput | heroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing heroes.
     */
    cursor?: heroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` heroes.
     */
    skip?: number
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * hero create
   */
  export type heroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null
    /**
     * The data needed to create a hero.
     */
    data: XOR<heroCreateInput, heroUncheckedCreateInput>
  }

  /**
   * hero createMany
   */
  export type heroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many heroes.
     */
    data: heroCreateManyInput | heroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * hero update
   */
  export type heroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null
    /**
     * The data needed to update a hero.
     */
    data: XOR<heroUpdateInput, heroUncheckedUpdateInput>
    /**
     * Choose, which hero to update.
     */
    where: heroWhereUniqueInput
  }

  /**
   * hero updateMany
   */
  export type heroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update heroes.
     */
    data: XOR<heroUpdateManyMutationInput, heroUncheckedUpdateManyInput>
    /**
     * Filter which heroes to update
     */
    where?: heroWhereInput
    /**
     * Limit how many heroes to update.
     */
    limit?: number
  }

  /**
   * hero upsert
   */
  export type heroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null
    /**
     * The filter to search for the hero to update in case it exists.
     */
    where: heroWhereUniqueInput
    /**
     * In case the hero found by the `where` argument doesn't exist, create a new hero with this data.
     */
    create: XOR<heroCreateInput, heroUncheckedCreateInput>
    /**
     * In case the hero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<heroUpdateInput, heroUncheckedUpdateInput>
  }

  /**
   * hero delete
   */
  export type heroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null
    /**
     * Filter which hero to delete.
     */
    where: heroWhereUniqueInput
  }

  /**
   * hero deleteMany
   */
  export type heroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which heroes to delete
     */
    where?: heroWhereInput
    /**
     * Limit how many heroes to delete.
     */
    limit?: number
  }

  /**
   * hero.skin
   */
  export type hero$skinArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skin
     */
    select?: skinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skin
     */
    omit?: skinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skinInclude<ExtArgs> | null
    where?: skinWhereInput
  }

  /**
   * hero without action
   */
  export type heroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null
  }


  /**
   * Model produk
   */

  export type AggregateProduk = {
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  export type ProdukAvgAggregateOutputType = {
    id: number | null
    harga_rupiah: number | null
    harga_ringgit: number | null
    harga_dolar: number | null
    author_id: number | null
    diskon: number | null
  }

  export type ProdukSumAggregateOutputType = {
    id: number | null
    harga_rupiah: number | null
    harga_ringgit: number | null
    harga_dolar: number | null
    author_id: number | null
    diskon: number | null
  }

  export type ProdukMinAggregateOutputType = {
    id: number | null
    nama: string | null
    harga_rupiah: number | null
    harga_ringgit: number | null
    harga_dolar: number | null
    deskripsi: string | null
    rank: string | null
    author_id: number | null
    status: boolean | null
    diskon: number | null
    highlight: boolean | null
    email_akun: string | null
    password_akun: string | null
    buyer_email: string | null
    buyer_lang: string | null
    merchant_order_id: string | null
  }

  export type ProdukMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    harga_rupiah: number | null
    harga_ringgit: number | null
    harga_dolar: number | null
    deskripsi: string | null
    rank: string | null
    author_id: number | null
    status: boolean | null
    diskon: number | null
    highlight: boolean | null
    email_akun: string | null
    password_akun: string | null
    buyer_email: string | null
    buyer_lang: string | null
    merchant_order_id: string | null
  }

  export type ProdukCountAggregateOutputType = {
    id: number
    nama: number
    harga_rupiah: number
    harga_ringgit: number
    harga_dolar: number
    deskripsi: number
    rank: number
    author_id: number
    status: number
    diskon: number
    highlight: number
    email_akun: number
    password_akun: number
    buyer_email: number
    buyer_lang: number
    merchant_order_id: number
    _all: number
  }


  export type ProdukAvgAggregateInputType = {
    id?: true
    harga_rupiah?: true
    harga_ringgit?: true
    harga_dolar?: true
    author_id?: true
    diskon?: true
  }

  export type ProdukSumAggregateInputType = {
    id?: true
    harga_rupiah?: true
    harga_ringgit?: true
    harga_dolar?: true
    author_id?: true
    diskon?: true
  }

  export type ProdukMinAggregateInputType = {
    id?: true
    nama?: true
    harga_rupiah?: true
    harga_ringgit?: true
    harga_dolar?: true
    deskripsi?: true
    rank?: true
    author_id?: true
    status?: true
    diskon?: true
    highlight?: true
    email_akun?: true
    password_akun?: true
    buyer_email?: true
    buyer_lang?: true
    merchant_order_id?: true
  }

  export type ProdukMaxAggregateInputType = {
    id?: true
    nama?: true
    harga_rupiah?: true
    harga_ringgit?: true
    harga_dolar?: true
    deskripsi?: true
    rank?: true
    author_id?: true
    status?: true
    diskon?: true
    highlight?: true
    email_akun?: true
    password_akun?: true
    buyer_email?: true
    buyer_lang?: true
    merchant_order_id?: true
  }

  export type ProdukCountAggregateInputType = {
    id?: true
    nama?: true
    harga_rupiah?: true
    harga_ringgit?: true
    harga_dolar?: true
    deskripsi?: true
    rank?: true
    author_id?: true
    status?: true
    diskon?: true
    highlight?: true
    email_akun?: true
    password_akun?: true
    buyer_email?: true
    buyer_lang?: true
    merchant_order_id?: true
    _all?: true
  }

  export type ProdukAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produk to aggregate.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produks
    **/
    _count?: true | ProdukCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukMaxAggregateInputType
  }

  export type GetProdukAggregateType<T extends ProdukAggregateArgs> = {
        [P in keyof T & keyof AggregateProduk]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduk[P]>
      : GetScalarType<T[P], AggregateProduk[P]>
  }




  export type produkGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkWhereInput
    orderBy?: produkOrderByWithAggregationInput | produkOrderByWithAggregationInput[]
    by: ProdukScalarFieldEnum[] | ProdukScalarFieldEnum
    having?: produkScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukCountAggregateInputType | true
    _avg?: ProdukAvgAggregateInputType
    _sum?: ProdukSumAggregateInputType
    _min?: ProdukMinAggregateInputType
    _max?: ProdukMaxAggregateInputType
  }

  export type ProdukGroupByOutputType = {
    id: number
    nama: string
    harga_rupiah: number
    harga_ringgit: number | null
    harga_dolar: number | null
    deskripsi: string | null
    rank: string
    author_id: number | null
    status: boolean
    diskon: number | null
    highlight: boolean | null
    email_akun: string | null
    password_akun: string | null
    buyer_email: string | null
    buyer_lang: string | null
    merchant_order_id: string | null
    _count: ProdukCountAggregateOutputType | null
    _avg: ProdukAvgAggregateOutputType | null
    _sum: ProdukSumAggregateOutputType | null
    _min: ProdukMinAggregateOutputType | null
    _max: ProdukMaxAggregateOutputType | null
  }

  type GetProdukGroupByPayload<T extends produkGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukGroupByOutputType[P]>
        }
      >
    >


  export type produkSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    harga_rupiah?: boolean
    harga_ringgit?: boolean
    harga_dolar?: boolean
    deskripsi?: boolean
    rank?: boolean
    author_id?: boolean
    status?: boolean
    diskon?: boolean
    highlight?: boolean
    email_akun?: boolean
    password_akun?: boolean
    buyer_email?: boolean
    buyer_lang?: boolean
    merchant_order_id?: boolean
    users?: boolean | produk$usersArgs<ExtArgs>
    produkimg?: boolean | produk$produkimgArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produk"]>



  export type produkSelectScalar = {
    id?: boolean
    nama?: boolean
    harga_rupiah?: boolean
    harga_ringgit?: boolean
    harga_dolar?: boolean
    deskripsi?: boolean
    rank?: boolean
    author_id?: boolean
    status?: boolean
    diskon?: boolean
    highlight?: boolean
    email_akun?: boolean
    password_akun?: boolean
    buyer_email?: boolean
    buyer_lang?: boolean
    merchant_order_id?: boolean
  }

  export type produkOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "harga_rupiah" | "harga_ringgit" | "harga_dolar" | "deskripsi" | "rank" | "author_id" | "status" | "diskon" | "highlight" | "email_akun" | "password_akun" | "buyer_email" | "buyer_lang" | "merchant_order_id", ExtArgs["result"]["produk"]>
  export type produkInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | produk$usersArgs<ExtArgs>
    produkimg?: boolean | produk$produkimgArgs<ExtArgs>
    _count?: boolean | ProdukCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $produkPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produk"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      produkimg: Prisma.$produkimgPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      harga_rupiah: number
      harga_ringgit: number | null
      harga_dolar: number | null
      deskripsi: string | null
      rank: string
      author_id: number | null
      status: boolean
      diskon: number | null
      highlight: boolean | null
      email_akun: string | null
      password_akun: string | null
      buyer_email: string | null
      buyer_lang: string | null
      merchant_order_id: string | null
    }, ExtArgs["result"]["produk"]>
    composites: {}
  }

  type produkGetPayload<S extends boolean | null | undefined | produkDefaultArgs> = $Result.GetResult<Prisma.$produkPayload, S>

  type produkCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produkFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdukCountAggregateInputType | true
    }

  export interface produkDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produk'], meta: { name: 'produk' } }
    /**
     * Find zero or one Produk that matches the filter.
     * @param {produkFindUniqueArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produkFindUniqueArgs>(args: SelectSubset<T, produkFindUniqueArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produk that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produkFindUniqueOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produkFindUniqueOrThrowArgs>(args: SelectSubset<T, produkFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindFirstArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produkFindFirstArgs>(args?: SelectSubset<T, produkFindFirstArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produk that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindFirstOrThrowArgs} args - Arguments to find a Produk
     * @example
     * // Get one Produk
     * const produk = await prisma.produk.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produkFindFirstOrThrowArgs>(args?: SelectSubset<T, produkFindFirstOrThrowArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produks
     * const produks = await prisma.produk.findMany()
     * 
     * // Get first 10 Produks
     * const produks = await prisma.produk.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produkWithIdOnly = await prisma.produk.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produkFindManyArgs>(args?: SelectSubset<T, produkFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produk.
     * @param {produkCreateArgs} args - Arguments to create a Produk.
     * @example
     * // Create one Produk
     * const Produk = await prisma.produk.create({
     *   data: {
     *     // ... data to create a Produk
     *   }
     * })
     * 
     */
    create<T extends produkCreateArgs>(args: SelectSubset<T, produkCreateArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produks.
     * @param {produkCreateManyArgs} args - Arguments to create many Produks.
     * @example
     * // Create many Produks
     * const produk = await prisma.produk.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produkCreateManyArgs>(args?: SelectSubset<T, produkCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produk.
     * @param {produkDeleteArgs} args - Arguments to delete one Produk.
     * @example
     * // Delete one Produk
     * const Produk = await prisma.produk.delete({
     *   where: {
     *     // ... filter to delete one Produk
     *   }
     * })
     * 
     */
    delete<T extends produkDeleteArgs>(args: SelectSubset<T, produkDeleteArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produk.
     * @param {produkUpdateArgs} args - Arguments to update one Produk.
     * @example
     * // Update one Produk
     * const produk = await prisma.produk.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produkUpdateArgs>(args: SelectSubset<T, produkUpdateArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produks.
     * @param {produkDeleteManyArgs} args - Arguments to filter Produks to delete.
     * @example
     * // Delete a few Produks
     * const { count } = await prisma.produk.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produkDeleteManyArgs>(args?: SelectSubset<T, produkDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produks
     * const produk = await prisma.produk.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produkUpdateManyArgs>(args: SelectSubset<T, produkUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produk.
     * @param {produkUpsertArgs} args - Arguments to update or create a Produk.
     * @example
     * // Update or create a Produk
     * const produk = await prisma.produk.upsert({
     *   create: {
     *     // ... data to create a Produk
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produk we want to update
     *   }
     * })
     */
    upsert<T extends produkUpsertArgs>(args: SelectSubset<T, produkUpsertArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkCountArgs} args - Arguments to filter Produks to count.
     * @example
     * // Count the number of Produks
     * const count = await prisma.produk.count({
     *   where: {
     *     // ... the filter for the Produks we want to count
     *   }
     * })
    **/
    count<T extends produkCountArgs>(
      args?: Subset<T, produkCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdukAggregateArgs>(args: Subset<T, ProdukAggregateArgs>): Prisma.PrismaPromise<GetProdukAggregateType<T>>

    /**
     * Group by Produk.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends produkGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produkGroupByArgs['orderBy'] }
        : { orderBy?: produkGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, produkGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produk model
   */
  readonly fields: produkFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produk.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produkClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends produk$usersArgs<ExtArgs> = {}>(args?: Subset<T, produk$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    produkimg<T extends produk$produkimgArgs<ExtArgs> = {}>(args?: Subset<T, produk$produkimgArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkimgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the produk model
   */
  interface produkFieldRefs {
    readonly id: FieldRef<"produk", 'Int'>
    readonly nama: FieldRef<"produk", 'String'>
    readonly harga_rupiah: FieldRef<"produk", 'Int'>
    readonly harga_ringgit: FieldRef<"produk", 'Int'>
    readonly harga_dolar: FieldRef<"produk", 'Int'>
    readonly deskripsi: FieldRef<"produk", 'String'>
    readonly rank: FieldRef<"produk", 'String'>
    readonly author_id: FieldRef<"produk", 'Int'>
    readonly status: FieldRef<"produk", 'Boolean'>
    readonly diskon: FieldRef<"produk", 'Float'>
    readonly highlight: FieldRef<"produk", 'Boolean'>
    readonly email_akun: FieldRef<"produk", 'String'>
    readonly password_akun: FieldRef<"produk", 'String'>
    readonly buyer_email: FieldRef<"produk", 'String'>
    readonly buyer_lang: FieldRef<"produk", 'String'>
    readonly merchant_order_id: FieldRef<"produk", 'String'>
  }
    

  // Custom InputTypes
  /**
   * produk findUnique
   */
  export type produkFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk findUniqueOrThrow
   */
  export type produkFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk findFirst
   */
  export type produkFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk findFirstOrThrow
   */
  export type produkFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produk to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produks.
     */
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk findMany
   */
  export type produkFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter, which produks to fetch.
     */
    where?: produkWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produks to fetch.
     */
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produks.
     */
    cursor?: produkWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produks.
     */
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * produk create
   */
  export type produkCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The data needed to create a produk.
     */
    data: XOR<produkCreateInput, produkUncheckedCreateInput>
  }

  /**
   * produk createMany
   */
  export type produkCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produks.
     */
    data: produkCreateManyInput | produkCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produk update
   */
  export type produkUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The data needed to update a produk.
     */
    data: XOR<produkUpdateInput, produkUncheckedUpdateInput>
    /**
     * Choose, which produk to update.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk updateMany
   */
  export type produkUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produks.
     */
    data: XOR<produkUpdateManyMutationInput, produkUncheckedUpdateManyInput>
    /**
     * Filter which produks to update
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to update.
     */
    limit?: number
  }

  /**
   * produk upsert
   */
  export type produkUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * The filter to search for the produk to update in case it exists.
     */
    where: produkWhereUniqueInput
    /**
     * In case the produk found by the `where` argument doesn't exist, create a new produk with this data.
     */
    create: XOR<produkCreateInput, produkUncheckedCreateInput>
    /**
     * In case the produk was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produkUpdateInput, produkUncheckedUpdateInput>
  }

  /**
   * produk delete
   */
  export type produkDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    /**
     * Filter which produk to delete.
     */
    where: produkWhereUniqueInput
  }

  /**
   * produk deleteMany
   */
  export type produkDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produks to delete
     */
    where?: produkWhereInput
    /**
     * Limit how many produks to delete.
     */
    limit?: number
  }

  /**
   * produk.users
   */
  export type produk$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * produk.produkimg
   */
  export type produk$produkimgArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkimg
     */
    select?: produkimgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produkimg
     */
    omit?: produkimgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkimgInclude<ExtArgs> | null
    where?: produkimgWhereInput
    orderBy?: produkimgOrderByWithRelationInput | produkimgOrderByWithRelationInput[]
    cursor?: produkimgWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdukimgScalarFieldEnum | ProdukimgScalarFieldEnum[]
  }

  /**
   * produk without action
   */
  export type produkDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
  }


  /**
   * Model produkimg
   */

  export type AggregateProdukimg = {
    _count: ProdukimgCountAggregateOutputType | null
    _avg: ProdukimgAvgAggregateOutputType | null
    _sum: ProdukimgSumAggregateOutputType | null
    _min: ProdukimgMinAggregateOutputType | null
    _max: ProdukimgMaxAggregateOutputType | null
  }

  export type ProdukimgAvgAggregateOutputType = {
    id: number | null
    id_produk: number | null
    urutan: number | null
  }

  export type ProdukimgSumAggregateOutputType = {
    id: number | null
    id_produk: number | null
    urutan: number | null
  }

  export type ProdukimgMinAggregateOutputType = {
    id: number | null
    link: string | null
    id_produk: number | null
    urutan: number | null
  }

  export type ProdukimgMaxAggregateOutputType = {
    id: number | null
    link: string | null
    id_produk: number | null
    urutan: number | null
  }

  export type ProdukimgCountAggregateOutputType = {
    id: number
    link: number
    id_produk: number
    urutan: number
    _all: number
  }


  export type ProdukimgAvgAggregateInputType = {
    id?: true
    id_produk?: true
    urutan?: true
  }

  export type ProdukimgSumAggregateInputType = {
    id?: true
    id_produk?: true
    urutan?: true
  }

  export type ProdukimgMinAggregateInputType = {
    id?: true
    link?: true
    id_produk?: true
    urutan?: true
  }

  export type ProdukimgMaxAggregateInputType = {
    id?: true
    link?: true
    id_produk?: true
    urutan?: true
  }

  export type ProdukimgCountAggregateInputType = {
    id?: true
    link?: true
    id_produk?: true
    urutan?: true
    _all?: true
  }

  export type ProdukimgAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produkimg to aggregate.
     */
    where?: produkimgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produkimgs to fetch.
     */
    orderBy?: produkimgOrderByWithRelationInput | produkimgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: produkimgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produkimgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produkimgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned produkimgs
    **/
    _count?: true | ProdukimgCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProdukimgAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProdukimgSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProdukimgMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProdukimgMaxAggregateInputType
  }

  export type GetProdukimgAggregateType<T extends ProdukimgAggregateArgs> = {
        [P in keyof T & keyof AggregateProdukimg]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProdukimg[P]>
      : GetScalarType<T[P], AggregateProdukimg[P]>
  }




  export type produkimgGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: produkimgWhereInput
    orderBy?: produkimgOrderByWithAggregationInput | produkimgOrderByWithAggregationInput[]
    by: ProdukimgScalarFieldEnum[] | ProdukimgScalarFieldEnum
    having?: produkimgScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProdukimgCountAggregateInputType | true
    _avg?: ProdukimgAvgAggregateInputType
    _sum?: ProdukimgSumAggregateInputType
    _min?: ProdukimgMinAggregateInputType
    _max?: ProdukimgMaxAggregateInputType
  }

  export type ProdukimgGroupByOutputType = {
    id: number
    link: string
    id_produk: number
    urutan: number
    _count: ProdukimgCountAggregateOutputType | null
    _avg: ProdukimgAvgAggregateOutputType | null
    _sum: ProdukimgSumAggregateOutputType | null
    _min: ProdukimgMinAggregateOutputType | null
    _max: ProdukimgMaxAggregateOutputType | null
  }

  type GetProdukimgGroupByPayload<T extends produkimgGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProdukimgGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProdukimgGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProdukimgGroupByOutputType[P]>
            : GetScalarType<T[P], ProdukimgGroupByOutputType[P]>
        }
      >
    >


  export type produkimgSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    link?: boolean
    id_produk?: boolean
    urutan?: boolean
    hero?: boolean | produkimg$heroArgs<ExtArgs>
    produk?: boolean | produkDefaultArgs<ExtArgs>
    _count?: boolean | ProdukimgCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["produkimg"]>



  export type produkimgSelectScalar = {
    id?: boolean
    link?: boolean
    id_produk?: boolean
    urutan?: boolean
  }

  export type produkimgOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "link" | "id_produk" | "urutan", ExtArgs["result"]["produkimg"]>
  export type produkimgInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | produkimg$heroArgs<ExtArgs>
    produk?: boolean | produkDefaultArgs<ExtArgs>
    _count?: boolean | ProdukimgCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $produkimgPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "produkimg"
    objects: {
      hero: Prisma.$heroPayload<ExtArgs>[]
      produk: Prisma.$produkPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      link: string
      id_produk: number
      urutan: number
    }, ExtArgs["result"]["produkimg"]>
    composites: {}
  }

  type produkimgGetPayload<S extends boolean | null | undefined | produkimgDefaultArgs> = $Result.GetResult<Prisma.$produkimgPayload, S>

  type produkimgCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<produkimgFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProdukimgCountAggregateInputType | true
    }

  export interface produkimgDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['produkimg'], meta: { name: 'produkimg' } }
    /**
     * Find zero or one Produkimg that matches the filter.
     * @param {produkimgFindUniqueArgs} args - Arguments to find a Produkimg
     * @example
     * // Get one Produkimg
     * const produkimg = await prisma.produkimg.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends produkimgFindUniqueArgs>(args: SelectSubset<T, produkimgFindUniqueArgs<ExtArgs>>): Prisma__produkimgClient<$Result.GetResult<Prisma.$produkimgPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Produkimg that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {produkimgFindUniqueOrThrowArgs} args - Arguments to find a Produkimg
     * @example
     * // Get one Produkimg
     * const produkimg = await prisma.produkimg.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends produkimgFindUniqueOrThrowArgs>(args: SelectSubset<T, produkimgFindUniqueOrThrowArgs<ExtArgs>>): Prisma__produkimgClient<$Result.GetResult<Prisma.$produkimgPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produkimg that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkimgFindFirstArgs} args - Arguments to find a Produkimg
     * @example
     * // Get one Produkimg
     * const produkimg = await prisma.produkimg.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends produkimgFindFirstArgs>(args?: SelectSubset<T, produkimgFindFirstArgs<ExtArgs>>): Prisma__produkimgClient<$Result.GetResult<Prisma.$produkimgPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Produkimg that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkimgFindFirstOrThrowArgs} args - Arguments to find a Produkimg
     * @example
     * // Get one Produkimg
     * const produkimg = await prisma.produkimg.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends produkimgFindFirstOrThrowArgs>(args?: SelectSubset<T, produkimgFindFirstOrThrowArgs<ExtArgs>>): Prisma__produkimgClient<$Result.GetResult<Prisma.$produkimgPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Produkimgs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkimgFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Produkimgs
     * const produkimgs = await prisma.produkimg.findMany()
     * 
     * // Get first 10 Produkimgs
     * const produkimgs = await prisma.produkimg.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const produkimgWithIdOnly = await prisma.produkimg.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends produkimgFindManyArgs>(args?: SelectSubset<T, produkimgFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkimgPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Produkimg.
     * @param {produkimgCreateArgs} args - Arguments to create a Produkimg.
     * @example
     * // Create one Produkimg
     * const Produkimg = await prisma.produkimg.create({
     *   data: {
     *     // ... data to create a Produkimg
     *   }
     * })
     * 
     */
    create<T extends produkimgCreateArgs>(args: SelectSubset<T, produkimgCreateArgs<ExtArgs>>): Prisma__produkimgClient<$Result.GetResult<Prisma.$produkimgPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Produkimgs.
     * @param {produkimgCreateManyArgs} args - Arguments to create many Produkimgs.
     * @example
     * // Create many Produkimgs
     * const produkimg = await prisma.produkimg.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends produkimgCreateManyArgs>(args?: SelectSubset<T, produkimgCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Produkimg.
     * @param {produkimgDeleteArgs} args - Arguments to delete one Produkimg.
     * @example
     * // Delete one Produkimg
     * const Produkimg = await prisma.produkimg.delete({
     *   where: {
     *     // ... filter to delete one Produkimg
     *   }
     * })
     * 
     */
    delete<T extends produkimgDeleteArgs>(args: SelectSubset<T, produkimgDeleteArgs<ExtArgs>>): Prisma__produkimgClient<$Result.GetResult<Prisma.$produkimgPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Produkimg.
     * @param {produkimgUpdateArgs} args - Arguments to update one Produkimg.
     * @example
     * // Update one Produkimg
     * const produkimg = await prisma.produkimg.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends produkimgUpdateArgs>(args: SelectSubset<T, produkimgUpdateArgs<ExtArgs>>): Prisma__produkimgClient<$Result.GetResult<Prisma.$produkimgPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Produkimgs.
     * @param {produkimgDeleteManyArgs} args - Arguments to filter Produkimgs to delete.
     * @example
     * // Delete a few Produkimgs
     * const { count } = await prisma.produkimg.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends produkimgDeleteManyArgs>(args?: SelectSubset<T, produkimgDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Produkimgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkimgUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Produkimgs
     * const produkimg = await prisma.produkimg.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends produkimgUpdateManyArgs>(args: SelectSubset<T, produkimgUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Produkimg.
     * @param {produkimgUpsertArgs} args - Arguments to update or create a Produkimg.
     * @example
     * // Update or create a Produkimg
     * const produkimg = await prisma.produkimg.upsert({
     *   create: {
     *     // ... data to create a Produkimg
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Produkimg we want to update
     *   }
     * })
     */
    upsert<T extends produkimgUpsertArgs>(args: SelectSubset<T, produkimgUpsertArgs<ExtArgs>>): Prisma__produkimgClient<$Result.GetResult<Prisma.$produkimgPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Produkimgs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkimgCountArgs} args - Arguments to filter Produkimgs to count.
     * @example
     * // Count the number of Produkimgs
     * const count = await prisma.produkimg.count({
     *   where: {
     *     // ... the filter for the Produkimgs we want to count
     *   }
     * })
    **/
    count<T extends produkimgCountArgs>(
      args?: Subset<T, produkimgCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProdukimgCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Produkimg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProdukimgAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProdukimgAggregateArgs>(args: Subset<T, ProdukimgAggregateArgs>): Prisma.PrismaPromise<GetProdukimgAggregateType<T>>

    /**
     * Group by Produkimg.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {produkimgGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends produkimgGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: produkimgGroupByArgs['orderBy'] }
        : { orderBy?: produkimgGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, produkimgGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProdukimgGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the produkimg model
   */
  readonly fields: produkimgFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for produkimg.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__produkimgClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hero<T extends produkimg$heroArgs<ExtArgs> = {}>(args?: Subset<T, produkimg$heroArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    produk<T extends produkDefaultArgs<ExtArgs> = {}>(args?: Subset<T, produkDefaultArgs<ExtArgs>>): Prisma__produkClient<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the produkimg model
   */
  interface produkimgFieldRefs {
    readonly id: FieldRef<"produkimg", 'Int'>
    readonly link: FieldRef<"produkimg", 'String'>
    readonly id_produk: FieldRef<"produkimg", 'Int'>
    readonly urutan: FieldRef<"produkimg", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * produkimg findUnique
   */
  export type produkimgFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkimg
     */
    select?: produkimgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produkimg
     */
    omit?: produkimgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkimgInclude<ExtArgs> | null
    /**
     * Filter, which produkimg to fetch.
     */
    where: produkimgWhereUniqueInput
  }

  /**
   * produkimg findUniqueOrThrow
   */
  export type produkimgFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkimg
     */
    select?: produkimgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produkimg
     */
    omit?: produkimgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkimgInclude<ExtArgs> | null
    /**
     * Filter, which produkimg to fetch.
     */
    where: produkimgWhereUniqueInput
  }

  /**
   * produkimg findFirst
   */
  export type produkimgFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkimg
     */
    select?: produkimgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produkimg
     */
    omit?: produkimgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkimgInclude<ExtArgs> | null
    /**
     * Filter, which produkimg to fetch.
     */
    where?: produkimgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produkimgs to fetch.
     */
    orderBy?: produkimgOrderByWithRelationInput | produkimgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produkimgs.
     */
    cursor?: produkimgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produkimgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produkimgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produkimgs.
     */
    distinct?: ProdukimgScalarFieldEnum | ProdukimgScalarFieldEnum[]
  }

  /**
   * produkimg findFirstOrThrow
   */
  export type produkimgFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkimg
     */
    select?: produkimgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produkimg
     */
    omit?: produkimgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkimgInclude<ExtArgs> | null
    /**
     * Filter, which produkimg to fetch.
     */
    where?: produkimgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produkimgs to fetch.
     */
    orderBy?: produkimgOrderByWithRelationInput | produkimgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for produkimgs.
     */
    cursor?: produkimgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produkimgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produkimgs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of produkimgs.
     */
    distinct?: ProdukimgScalarFieldEnum | ProdukimgScalarFieldEnum[]
  }

  /**
   * produkimg findMany
   */
  export type produkimgFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkimg
     */
    select?: produkimgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produkimg
     */
    omit?: produkimgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkimgInclude<ExtArgs> | null
    /**
     * Filter, which produkimgs to fetch.
     */
    where?: produkimgWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of produkimgs to fetch.
     */
    orderBy?: produkimgOrderByWithRelationInput | produkimgOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing produkimgs.
     */
    cursor?: produkimgWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` produkimgs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` produkimgs.
     */
    skip?: number
    distinct?: ProdukimgScalarFieldEnum | ProdukimgScalarFieldEnum[]
  }

  /**
   * produkimg create
   */
  export type produkimgCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkimg
     */
    select?: produkimgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produkimg
     */
    omit?: produkimgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkimgInclude<ExtArgs> | null
    /**
     * The data needed to create a produkimg.
     */
    data: XOR<produkimgCreateInput, produkimgUncheckedCreateInput>
  }

  /**
   * produkimg createMany
   */
  export type produkimgCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many produkimgs.
     */
    data: produkimgCreateManyInput | produkimgCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * produkimg update
   */
  export type produkimgUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkimg
     */
    select?: produkimgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produkimg
     */
    omit?: produkimgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkimgInclude<ExtArgs> | null
    /**
     * The data needed to update a produkimg.
     */
    data: XOR<produkimgUpdateInput, produkimgUncheckedUpdateInput>
    /**
     * Choose, which produkimg to update.
     */
    where: produkimgWhereUniqueInput
  }

  /**
   * produkimg updateMany
   */
  export type produkimgUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update produkimgs.
     */
    data: XOR<produkimgUpdateManyMutationInput, produkimgUncheckedUpdateManyInput>
    /**
     * Filter which produkimgs to update
     */
    where?: produkimgWhereInput
    /**
     * Limit how many produkimgs to update.
     */
    limit?: number
  }

  /**
   * produkimg upsert
   */
  export type produkimgUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkimg
     */
    select?: produkimgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produkimg
     */
    omit?: produkimgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkimgInclude<ExtArgs> | null
    /**
     * The filter to search for the produkimg to update in case it exists.
     */
    where: produkimgWhereUniqueInput
    /**
     * In case the produkimg found by the `where` argument doesn't exist, create a new produkimg with this data.
     */
    create: XOR<produkimgCreateInput, produkimgUncheckedCreateInput>
    /**
     * In case the produkimg was found with the provided `where` argument, update it with this data.
     */
    update: XOR<produkimgUpdateInput, produkimgUncheckedUpdateInput>
  }

  /**
   * produkimg delete
   */
  export type produkimgDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkimg
     */
    select?: produkimgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produkimg
     */
    omit?: produkimgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkimgInclude<ExtArgs> | null
    /**
     * Filter which produkimg to delete.
     */
    where: produkimgWhereUniqueInput
  }

  /**
   * produkimg deleteMany
   */
  export type produkimgDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which produkimgs to delete
     */
    where?: produkimgWhereInput
    /**
     * Limit how many produkimgs to delete.
     */
    limit?: number
  }

  /**
   * produkimg.hero
   */
  export type produkimg$heroArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the hero
     */
    select?: heroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the hero
     */
    omit?: heroOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: heroInclude<ExtArgs> | null
    where?: heroWhereInput
    orderBy?: heroOrderByWithRelationInput | heroOrderByWithRelationInput[]
    cursor?: heroWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * produkimg without action
   */
  export type produkimgDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produkimg
     */
    select?: produkimgSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produkimg
     */
    omit?: produkimgOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkimgInclude<ExtArgs> | null
  }


  /**
   * Model skin
   */

  export type AggregateSkin = {
    _count: SkinCountAggregateOutputType | null
    _avg: SkinAvgAggregateOutputType | null
    _sum: SkinSumAggregateOutputType | null
    _min: SkinMinAggregateOutputType | null
    _max: SkinMaxAggregateOutputType | null
  }

  export type SkinAvgAggregateOutputType = {
    id: number | null
    id_hero: number | null
  }

  export type SkinSumAggregateOutputType = {
    id: number | null
    id_hero: number | null
  }

  export type SkinMinAggregateOutputType = {
    id: number | null
    nama: string | null
    alias_skin: string | null
    id_hero: number | null
  }

  export type SkinMaxAggregateOutputType = {
    id: number | null
    nama: string | null
    alias_skin: string | null
    id_hero: number | null
  }

  export type SkinCountAggregateOutputType = {
    id: number
    nama: number
    alias_skin: number
    id_hero: number
    _all: number
  }


  export type SkinAvgAggregateInputType = {
    id?: true
    id_hero?: true
  }

  export type SkinSumAggregateInputType = {
    id?: true
    id_hero?: true
  }

  export type SkinMinAggregateInputType = {
    id?: true
    nama?: true
    alias_skin?: true
    id_hero?: true
  }

  export type SkinMaxAggregateInputType = {
    id?: true
    nama?: true
    alias_skin?: true
    id_hero?: true
  }

  export type SkinCountAggregateInputType = {
    id?: true
    nama?: true
    alias_skin?: true
    id_hero?: true
    _all?: true
  }

  export type SkinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skin to aggregate.
     */
    where?: skinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skins to fetch.
     */
    orderBy?: skinOrderByWithRelationInput | skinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: skinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned skins
    **/
    _count?: true | SkinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkinAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkinSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkinMaxAggregateInputType
  }

  export type GetSkinAggregateType<T extends SkinAggregateArgs> = {
        [P in keyof T & keyof AggregateSkin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkin[P]>
      : GetScalarType<T[P], AggregateSkin[P]>
  }




  export type skinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: skinWhereInput
    orderBy?: skinOrderByWithAggregationInput | skinOrderByWithAggregationInput[]
    by: SkinScalarFieldEnum[] | SkinScalarFieldEnum
    having?: skinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkinCountAggregateInputType | true
    _avg?: SkinAvgAggregateInputType
    _sum?: SkinSumAggregateInputType
    _min?: SkinMinAggregateInputType
    _max?: SkinMaxAggregateInputType
  }

  export type SkinGroupByOutputType = {
    id: number
    nama: string
    alias_skin: string | null
    id_hero: number
    _count: SkinCountAggregateOutputType | null
    _avg: SkinAvgAggregateOutputType | null
    _sum: SkinSumAggregateOutputType | null
    _min: SkinMinAggregateOutputType | null
    _max: SkinMaxAggregateOutputType | null
  }

  type GetSkinGroupByPayload<T extends skinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkinGroupByOutputType[P]>
            : GetScalarType<T[P], SkinGroupByOutputType[P]>
        }
      >
    >


  export type skinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    nama?: boolean
    alias_skin?: boolean
    id_hero?: boolean
    hero?: boolean | heroDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skin"]>



  export type skinSelectScalar = {
    id?: boolean
    nama?: boolean
    alias_skin?: boolean
    id_hero?: boolean
  }

  export type skinOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "nama" | "alias_skin" | "id_hero", ExtArgs["result"]["skin"]>
  export type skinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    hero?: boolean | heroDefaultArgs<ExtArgs>
  }

  export type $skinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "skin"
    objects: {
      hero: Prisma.$heroPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      nama: string
      alias_skin: string | null
      id_hero: number
    }, ExtArgs["result"]["skin"]>
    composites: {}
  }

  type skinGetPayload<S extends boolean | null | undefined | skinDefaultArgs> = $Result.GetResult<Prisma.$skinPayload, S>

  type skinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<skinFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkinCountAggregateInputType | true
    }

  export interface skinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['skin'], meta: { name: 'skin' } }
    /**
     * Find zero or one Skin that matches the filter.
     * @param {skinFindUniqueArgs} args - Arguments to find a Skin
     * @example
     * // Get one Skin
     * const skin = await prisma.skin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends skinFindUniqueArgs>(args: SelectSubset<T, skinFindUniqueArgs<ExtArgs>>): Prisma__skinClient<$Result.GetResult<Prisma.$skinPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {skinFindUniqueOrThrowArgs} args - Arguments to find a Skin
     * @example
     * // Get one Skin
     * const skin = await prisma.skin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends skinFindUniqueOrThrowArgs>(args: SelectSubset<T, skinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__skinClient<$Result.GetResult<Prisma.$skinPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skinFindFirstArgs} args - Arguments to find a Skin
     * @example
     * // Get one Skin
     * const skin = await prisma.skin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends skinFindFirstArgs>(args?: SelectSubset<T, skinFindFirstArgs<ExtArgs>>): Prisma__skinClient<$Result.GetResult<Prisma.$skinPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skinFindFirstOrThrowArgs} args - Arguments to find a Skin
     * @example
     * // Get one Skin
     * const skin = await prisma.skin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends skinFindFirstOrThrowArgs>(args?: SelectSubset<T, skinFindFirstOrThrowArgs<ExtArgs>>): Prisma__skinClient<$Result.GetResult<Prisma.$skinPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skins
     * const skins = await prisma.skin.findMany()
     * 
     * // Get first 10 Skins
     * const skins = await prisma.skin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skinWithIdOnly = await prisma.skin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends skinFindManyArgs>(args?: SelectSubset<T, skinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$skinPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skin.
     * @param {skinCreateArgs} args - Arguments to create a Skin.
     * @example
     * // Create one Skin
     * const Skin = await prisma.skin.create({
     *   data: {
     *     // ... data to create a Skin
     *   }
     * })
     * 
     */
    create<T extends skinCreateArgs>(args: SelectSubset<T, skinCreateArgs<ExtArgs>>): Prisma__skinClient<$Result.GetResult<Prisma.$skinPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skins.
     * @param {skinCreateManyArgs} args - Arguments to create many Skins.
     * @example
     * // Create many Skins
     * const skin = await prisma.skin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends skinCreateManyArgs>(args?: SelectSubset<T, skinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Skin.
     * @param {skinDeleteArgs} args - Arguments to delete one Skin.
     * @example
     * // Delete one Skin
     * const Skin = await prisma.skin.delete({
     *   where: {
     *     // ... filter to delete one Skin
     *   }
     * })
     * 
     */
    delete<T extends skinDeleteArgs>(args: SelectSubset<T, skinDeleteArgs<ExtArgs>>): Prisma__skinClient<$Result.GetResult<Prisma.$skinPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skin.
     * @param {skinUpdateArgs} args - Arguments to update one Skin.
     * @example
     * // Update one Skin
     * const skin = await prisma.skin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends skinUpdateArgs>(args: SelectSubset<T, skinUpdateArgs<ExtArgs>>): Prisma__skinClient<$Result.GetResult<Prisma.$skinPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skins.
     * @param {skinDeleteManyArgs} args - Arguments to filter Skins to delete.
     * @example
     * // Delete a few Skins
     * const { count } = await prisma.skin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends skinDeleteManyArgs>(args?: SelectSubset<T, skinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skins
     * const skin = await prisma.skin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends skinUpdateManyArgs>(args: SelectSubset<T, skinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Skin.
     * @param {skinUpsertArgs} args - Arguments to update or create a Skin.
     * @example
     * // Update or create a Skin
     * const skin = await prisma.skin.upsert({
     *   create: {
     *     // ... data to create a Skin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skin we want to update
     *   }
     * })
     */
    upsert<T extends skinUpsertArgs>(args: SelectSubset<T, skinUpsertArgs<ExtArgs>>): Prisma__skinClient<$Result.GetResult<Prisma.$skinPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skinCountArgs} args - Arguments to filter Skins to count.
     * @example
     * // Count the number of Skins
     * const count = await prisma.skin.count({
     *   where: {
     *     // ... the filter for the Skins we want to count
     *   }
     * })
    **/
    count<T extends skinCountArgs>(
      args?: Subset<T, skinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkinAggregateArgs>(args: Subset<T, SkinAggregateArgs>): Prisma.PrismaPromise<GetSkinAggregateType<T>>

    /**
     * Group by Skin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {skinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends skinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: skinGroupByArgs['orderBy'] }
        : { orderBy?: skinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, skinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the skin model
   */
  readonly fields: skinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for skin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__skinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    hero<T extends heroDefaultArgs<ExtArgs> = {}>(args?: Subset<T, heroDefaultArgs<ExtArgs>>): Prisma__heroClient<$Result.GetResult<Prisma.$heroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the skin model
   */
  interface skinFieldRefs {
    readonly id: FieldRef<"skin", 'Int'>
    readonly nama: FieldRef<"skin", 'String'>
    readonly alias_skin: FieldRef<"skin", 'String'>
    readonly id_hero: FieldRef<"skin", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * skin findUnique
   */
  export type skinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skin
     */
    select?: skinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skin
     */
    omit?: skinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skinInclude<ExtArgs> | null
    /**
     * Filter, which skin to fetch.
     */
    where: skinWhereUniqueInput
  }

  /**
   * skin findUniqueOrThrow
   */
  export type skinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skin
     */
    select?: skinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skin
     */
    omit?: skinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skinInclude<ExtArgs> | null
    /**
     * Filter, which skin to fetch.
     */
    where: skinWhereUniqueInput
  }

  /**
   * skin findFirst
   */
  export type skinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skin
     */
    select?: skinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skin
     */
    omit?: skinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skinInclude<ExtArgs> | null
    /**
     * Filter, which skin to fetch.
     */
    where?: skinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skins to fetch.
     */
    orderBy?: skinOrderByWithRelationInput | skinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skins.
     */
    cursor?: skinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skins.
     */
    distinct?: SkinScalarFieldEnum | SkinScalarFieldEnum[]
  }

  /**
   * skin findFirstOrThrow
   */
  export type skinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skin
     */
    select?: skinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skin
     */
    omit?: skinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skinInclude<ExtArgs> | null
    /**
     * Filter, which skin to fetch.
     */
    where?: skinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skins to fetch.
     */
    orderBy?: skinOrderByWithRelationInput | skinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for skins.
     */
    cursor?: skinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of skins.
     */
    distinct?: SkinScalarFieldEnum | SkinScalarFieldEnum[]
  }

  /**
   * skin findMany
   */
  export type skinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skin
     */
    select?: skinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skin
     */
    omit?: skinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skinInclude<ExtArgs> | null
    /**
     * Filter, which skins to fetch.
     */
    where?: skinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of skins to fetch.
     */
    orderBy?: skinOrderByWithRelationInput | skinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing skins.
     */
    cursor?: skinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` skins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` skins.
     */
    skip?: number
    distinct?: SkinScalarFieldEnum | SkinScalarFieldEnum[]
  }

  /**
   * skin create
   */
  export type skinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skin
     */
    select?: skinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skin
     */
    omit?: skinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skinInclude<ExtArgs> | null
    /**
     * The data needed to create a skin.
     */
    data: XOR<skinCreateInput, skinUncheckedCreateInput>
  }

  /**
   * skin createMany
   */
  export type skinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many skins.
     */
    data: skinCreateManyInput | skinCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * skin update
   */
  export type skinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skin
     */
    select?: skinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skin
     */
    omit?: skinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skinInclude<ExtArgs> | null
    /**
     * The data needed to update a skin.
     */
    data: XOR<skinUpdateInput, skinUncheckedUpdateInput>
    /**
     * Choose, which skin to update.
     */
    where: skinWhereUniqueInput
  }

  /**
   * skin updateMany
   */
  export type skinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update skins.
     */
    data: XOR<skinUpdateManyMutationInput, skinUncheckedUpdateManyInput>
    /**
     * Filter which skins to update
     */
    where?: skinWhereInput
    /**
     * Limit how many skins to update.
     */
    limit?: number
  }

  /**
   * skin upsert
   */
  export type skinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skin
     */
    select?: skinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skin
     */
    omit?: skinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skinInclude<ExtArgs> | null
    /**
     * The filter to search for the skin to update in case it exists.
     */
    where: skinWhereUniqueInput
    /**
     * In case the skin found by the `where` argument doesn't exist, create a new skin with this data.
     */
    create: XOR<skinCreateInput, skinUncheckedCreateInput>
    /**
     * In case the skin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<skinUpdateInput, skinUncheckedUpdateInput>
  }

  /**
   * skin delete
   */
  export type skinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skin
     */
    select?: skinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skin
     */
    omit?: skinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skinInclude<ExtArgs> | null
    /**
     * Filter which skin to delete.
     */
    where: skinWhereUniqueInput
  }

  /**
   * skin deleteMany
   */
  export type skinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which skins to delete
     */
    where?: skinWhereInput
    /**
     * Limit how many skins to delete.
     */
    limit?: number
  }

  /**
   * skin without action
   */
  export type skinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the skin
     */
    select?: skinSelect<ExtArgs> | null
    /**
     * Omit specific fields from the skin
     */
    omit?: skinOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: skinInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    username: string | null
    password: string | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    username: number
    password: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    username: string
    password: string
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    produk?: boolean | users$produkArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>



  export type usersSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    produk?: boolean | users$produkArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      produk: Prisma.$produkPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      username: string
      password: string
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    produk<T extends users$produkArgs<ExtArgs> = {}>(args?: Subset<T, users$produkArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$produkPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly username: FieldRef<"users", 'String'>
    readonly password: FieldRef<"users", 'String'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.produk
   */
  export type users$produkArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the produk
     */
    select?: produkSelect<ExtArgs> | null
    /**
     * Omit specific fields from the produk
     */
    omit?: produkOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: produkInclude<ExtArgs> | null
    where?: produkWhereInput
    orderBy?: produkOrderByWithRelationInput | produkOrderByWithRelationInput[]
    cursor?: produkWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProdukScalarFieldEnum | ProdukScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Model banner
   */

  export type AggregateBanner = {
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  export type BannerAvgAggregateOutputType = {
    id: number | null
  }

  export type BannerSumAggregateOutputType = {
    id: number | null
  }

  export type BannerMinAggregateOutputType = {
    id: number | null
    url: string | null
    highlight: boolean | null
  }

  export type BannerMaxAggregateOutputType = {
    id: number | null
    url: string | null
    highlight: boolean | null
  }

  export type BannerCountAggregateOutputType = {
    id: number
    url: number
    highlight: number
    _all: number
  }


  export type BannerAvgAggregateInputType = {
    id?: true
  }

  export type BannerSumAggregateInputType = {
    id?: true
  }

  export type BannerMinAggregateInputType = {
    id?: true
    url?: true
    highlight?: true
  }

  export type BannerMaxAggregateInputType = {
    id?: true
    url?: true
    highlight?: true
  }

  export type BannerCountAggregateInputType = {
    id?: true
    url?: true
    highlight?: true
    _all?: true
  }

  export type BannerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banner to aggregate.
     */
    where?: bannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannerOrderByWithRelationInput | bannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: bannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned banners
    **/
    _count?: true | BannerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BannerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BannerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BannerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BannerMaxAggregateInputType
  }

  export type GetBannerAggregateType<T extends BannerAggregateArgs> = {
        [P in keyof T & keyof AggregateBanner]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBanner[P]>
      : GetScalarType<T[P], AggregateBanner[P]>
  }




  export type bannerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: bannerWhereInput
    orderBy?: bannerOrderByWithAggregationInput | bannerOrderByWithAggregationInput[]
    by: BannerScalarFieldEnum[] | BannerScalarFieldEnum
    having?: bannerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BannerCountAggregateInputType | true
    _avg?: BannerAvgAggregateInputType
    _sum?: BannerSumAggregateInputType
    _min?: BannerMinAggregateInputType
    _max?: BannerMaxAggregateInputType
  }

  export type BannerGroupByOutputType = {
    id: number
    url: string
    highlight: boolean
    _count: BannerCountAggregateOutputType | null
    _avg: BannerAvgAggregateOutputType | null
    _sum: BannerSumAggregateOutputType | null
    _min: BannerMinAggregateOutputType | null
    _max: BannerMaxAggregateOutputType | null
  }

  type GetBannerGroupByPayload<T extends bannerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BannerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BannerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BannerGroupByOutputType[P]>
            : GetScalarType<T[P], BannerGroupByOutputType[P]>
        }
      >
    >


  export type bannerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    highlight?: boolean
  }, ExtArgs["result"]["banner"]>



  export type bannerSelectScalar = {
    id?: boolean
    url?: boolean
    highlight?: boolean
  }

  export type bannerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "highlight", ExtArgs["result"]["banner"]>

  export type $bannerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "banner"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      url: string
      highlight: boolean
    }, ExtArgs["result"]["banner"]>
    composites: {}
  }

  type bannerGetPayload<S extends boolean | null | undefined | bannerDefaultArgs> = $Result.GetResult<Prisma.$bannerPayload, S>

  type bannerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<bannerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BannerCountAggregateInputType | true
    }

  export interface bannerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['banner'], meta: { name: 'banner' } }
    /**
     * Find zero or one Banner that matches the filter.
     * @param {bannerFindUniqueArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends bannerFindUniqueArgs>(args: SelectSubset<T, bannerFindUniqueArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Banner that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {bannerFindUniqueOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends bannerFindUniqueOrThrowArgs>(args: SelectSubset<T, bannerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerFindFirstArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends bannerFindFirstArgs>(args?: SelectSubset<T, bannerFindFirstArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Banner that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerFindFirstOrThrowArgs} args - Arguments to find a Banner
     * @example
     * // Get one Banner
     * const banner = await prisma.banner.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends bannerFindFirstOrThrowArgs>(args?: SelectSubset<T, bannerFindFirstOrThrowArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Banners that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Banners
     * const banners = await prisma.banner.findMany()
     * 
     * // Get first 10 Banners
     * const banners = await prisma.banner.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const bannerWithIdOnly = await prisma.banner.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends bannerFindManyArgs>(args?: SelectSubset<T, bannerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Banner.
     * @param {bannerCreateArgs} args - Arguments to create a Banner.
     * @example
     * // Create one Banner
     * const Banner = await prisma.banner.create({
     *   data: {
     *     // ... data to create a Banner
     *   }
     * })
     * 
     */
    create<T extends bannerCreateArgs>(args: SelectSubset<T, bannerCreateArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Banners.
     * @param {bannerCreateManyArgs} args - Arguments to create many Banners.
     * @example
     * // Create many Banners
     * const banner = await prisma.banner.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends bannerCreateManyArgs>(args?: SelectSubset<T, bannerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Banner.
     * @param {bannerDeleteArgs} args - Arguments to delete one Banner.
     * @example
     * // Delete one Banner
     * const Banner = await prisma.banner.delete({
     *   where: {
     *     // ... filter to delete one Banner
     *   }
     * })
     * 
     */
    delete<T extends bannerDeleteArgs>(args: SelectSubset<T, bannerDeleteArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Banner.
     * @param {bannerUpdateArgs} args - Arguments to update one Banner.
     * @example
     * // Update one Banner
     * const banner = await prisma.banner.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends bannerUpdateArgs>(args: SelectSubset<T, bannerUpdateArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Banners.
     * @param {bannerDeleteManyArgs} args - Arguments to filter Banners to delete.
     * @example
     * // Delete a few Banners
     * const { count } = await prisma.banner.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends bannerDeleteManyArgs>(args?: SelectSubset<T, bannerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Banners
     * const banner = await prisma.banner.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends bannerUpdateManyArgs>(args: SelectSubset<T, bannerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Banner.
     * @param {bannerUpsertArgs} args - Arguments to update or create a Banner.
     * @example
     * // Update or create a Banner
     * const banner = await prisma.banner.upsert({
     *   create: {
     *     // ... data to create a Banner
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Banner we want to update
     *   }
     * })
     */
    upsert<T extends bannerUpsertArgs>(args: SelectSubset<T, bannerUpsertArgs<ExtArgs>>): Prisma__bannerClient<$Result.GetResult<Prisma.$bannerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Banners.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerCountArgs} args - Arguments to filter Banners to count.
     * @example
     * // Count the number of Banners
     * const count = await prisma.banner.count({
     *   where: {
     *     // ... the filter for the Banners we want to count
     *   }
     * })
    **/
    count<T extends bannerCountArgs>(
      args?: Subset<T, bannerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BannerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BannerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends BannerAggregateArgs>(args: Subset<T, BannerAggregateArgs>): Prisma.PrismaPromise<GetBannerAggregateType<T>>

    /**
     * Group by Banner.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {bannerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends bannerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: bannerGroupByArgs['orderBy'] }
        : { orderBy?: bannerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, bannerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBannerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the banner model
   */
  readonly fields: bannerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for banner.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__bannerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the banner model
   */
  interface bannerFieldRefs {
    readonly id: FieldRef<"banner", 'Int'>
    readonly url: FieldRef<"banner", 'String'>
    readonly highlight: FieldRef<"banner", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * banner findUnique
   */
  export type bannerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Filter, which banner to fetch.
     */
    where: bannerWhereUniqueInput
  }

  /**
   * banner findUniqueOrThrow
   */
  export type bannerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Filter, which banner to fetch.
     */
    where: bannerWhereUniqueInput
  }

  /**
   * banner findFirst
   */
  export type bannerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Filter, which banner to fetch.
     */
    where?: bannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannerOrderByWithRelationInput | bannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banners.
     */
    cursor?: bannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * banner findFirstOrThrow
   */
  export type bannerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Filter, which banner to fetch.
     */
    where?: bannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannerOrderByWithRelationInput | bannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for banners.
     */
    cursor?: bannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of banners.
     */
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * banner findMany
   */
  export type bannerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Filter, which banners to fetch.
     */
    where?: bannerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of banners to fetch.
     */
    orderBy?: bannerOrderByWithRelationInput | bannerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing banners.
     */
    cursor?: bannerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` banners from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` banners.
     */
    skip?: number
    distinct?: BannerScalarFieldEnum | BannerScalarFieldEnum[]
  }

  /**
   * banner create
   */
  export type bannerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * The data needed to create a banner.
     */
    data: XOR<bannerCreateInput, bannerUncheckedCreateInput>
  }

  /**
   * banner createMany
   */
  export type bannerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many banners.
     */
    data: bannerCreateManyInput | bannerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * banner update
   */
  export type bannerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * The data needed to update a banner.
     */
    data: XOR<bannerUpdateInput, bannerUncheckedUpdateInput>
    /**
     * Choose, which banner to update.
     */
    where: bannerWhereUniqueInput
  }

  /**
   * banner updateMany
   */
  export type bannerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update banners.
     */
    data: XOR<bannerUpdateManyMutationInput, bannerUncheckedUpdateManyInput>
    /**
     * Filter which banners to update
     */
    where?: bannerWhereInput
    /**
     * Limit how many banners to update.
     */
    limit?: number
  }

  /**
   * banner upsert
   */
  export type bannerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * The filter to search for the banner to update in case it exists.
     */
    where: bannerWhereUniqueInput
    /**
     * In case the banner found by the `where` argument doesn't exist, create a new banner with this data.
     */
    create: XOR<bannerCreateInput, bannerUncheckedCreateInput>
    /**
     * In case the banner was found with the provided `where` argument, update it with this data.
     */
    update: XOR<bannerUpdateInput, bannerUncheckedUpdateInput>
  }

  /**
   * banner delete
   */
  export type bannerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
    /**
     * Filter which banner to delete.
     */
    where: bannerWhereUniqueInput
  }

  /**
   * banner deleteMany
   */
  export type bannerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which banners to delete
     */
    where?: bannerWhereInput
    /**
     * Limit how many banners to delete.
     */
    limit?: number
  }

  /**
   * banner without action
   */
  export type bannerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the banner
     */
    select?: bannerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the banner
     */
    omit?: bannerOmit<ExtArgs> | null
  }


  /**
   * Model pengumuman
   */

  export type AggregatePengumuman = {
    _count: PengumumanCountAggregateOutputType | null
    _avg: PengumumanAvgAggregateOutputType | null
    _sum: PengumumanSumAggregateOutputType | null
    _min: PengumumanMinAggregateOutputType | null
    _max: PengumumanMaxAggregateOutputType | null
  }

  export type PengumumanAvgAggregateOutputType = {
    id: number | null
  }

  export type PengumumanSumAggregateOutputType = {
    id: number | null
  }

  export type PengumumanMinAggregateOutputType = {
    id: number | null
    pengumuman: string | null
    icon: string | null
    icon_position: string | null
    highlight: boolean | null
  }

  export type PengumumanMaxAggregateOutputType = {
    id: number | null
    pengumuman: string | null
    icon: string | null
    icon_position: string | null
    highlight: boolean | null
  }

  export type PengumumanCountAggregateOutputType = {
    id: number
    pengumuman: number
    icon: number
    icon_position: number
    highlight: number
    _all: number
  }


  export type PengumumanAvgAggregateInputType = {
    id?: true
  }

  export type PengumumanSumAggregateInputType = {
    id?: true
  }

  export type PengumumanMinAggregateInputType = {
    id?: true
    pengumuman?: true
    icon?: true
    icon_position?: true
    highlight?: true
  }

  export type PengumumanMaxAggregateInputType = {
    id?: true
    pengumuman?: true
    icon?: true
    icon_position?: true
    highlight?: true
  }

  export type PengumumanCountAggregateInputType = {
    id?: true
    pengumuman?: true
    icon?: true
    icon_position?: true
    highlight?: true
    _all?: true
  }

  export type PengumumanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pengumuman to aggregate.
     */
    where?: pengumumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pengumumen to fetch.
     */
    orderBy?: pengumumanOrderByWithRelationInput | pengumumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: pengumumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pengumumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pengumumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned pengumumen
    **/
    _count?: true | PengumumanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PengumumanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PengumumanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PengumumanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PengumumanMaxAggregateInputType
  }

  export type GetPengumumanAggregateType<T extends PengumumanAggregateArgs> = {
        [P in keyof T & keyof AggregatePengumuman]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePengumuman[P]>
      : GetScalarType<T[P], AggregatePengumuman[P]>
  }




  export type pengumumanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: pengumumanWhereInput
    orderBy?: pengumumanOrderByWithAggregationInput | pengumumanOrderByWithAggregationInput[]
    by: PengumumanScalarFieldEnum[] | PengumumanScalarFieldEnum
    having?: pengumumanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PengumumanCountAggregateInputType | true
    _avg?: PengumumanAvgAggregateInputType
    _sum?: PengumumanSumAggregateInputType
    _min?: PengumumanMinAggregateInputType
    _max?: PengumumanMaxAggregateInputType
  }

  export type PengumumanGroupByOutputType = {
    id: number
    pengumuman: string
    icon: string | null
    icon_position: string | null
    highlight: boolean
    _count: PengumumanCountAggregateOutputType | null
    _avg: PengumumanAvgAggregateOutputType | null
    _sum: PengumumanSumAggregateOutputType | null
    _min: PengumumanMinAggregateOutputType | null
    _max: PengumumanMaxAggregateOutputType | null
  }

  type GetPengumumanGroupByPayload<T extends pengumumanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PengumumanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PengumumanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PengumumanGroupByOutputType[P]>
            : GetScalarType<T[P], PengumumanGroupByOutputType[P]>
        }
      >
    >


  export type pengumumanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    pengumuman?: boolean
    icon?: boolean
    icon_position?: boolean
    highlight?: boolean
  }, ExtArgs["result"]["pengumuman"]>



  export type pengumumanSelectScalar = {
    id?: boolean
    pengumuman?: boolean
    icon?: boolean
    icon_position?: boolean
    highlight?: boolean
  }

  export type pengumumanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "pengumuman" | "icon" | "icon_position" | "highlight", ExtArgs["result"]["pengumuman"]>

  export type $pengumumanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "pengumuman"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      pengumuman: string
      icon: string | null
      icon_position: string | null
      highlight: boolean
    }, ExtArgs["result"]["pengumuman"]>
    composites: {}
  }

  type pengumumanGetPayload<S extends boolean | null | undefined | pengumumanDefaultArgs> = $Result.GetResult<Prisma.$pengumumanPayload, S>

  type pengumumanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<pengumumanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PengumumanCountAggregateInputType | true
    }

  export interface pengumumanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['pengumuman'], meta: { name: 'pengumuman' } }
    /**
     * Find zero or one Pengumuman that matches the filter.
     * @param {pengumumanFindUniqueArgs} args - Arguments to find a Pengumuman
     * @example
     * // Get one Pengumuman
     * const pengumuman = await prisma.pengumuman.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends pengumumanFindUniqueArgs>(args: SelectSubset<T, pengumumanFindUniqueArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Pengumuman that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {pengumumanFindUniqueOrThrowArgs} args - Arguments to find a Pengumuman
     * @example
     * // Get one Pengumuman
     * const pengumuman = await prisma.pengumuman.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends pengumumanFindUniqueOrThrowArgs>(args: SelectSubset<T, pengumumanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengumuman that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengumumanFindFirstArgs} args - Arguments to find a Pengumuman
     * @example
     * // Get one Pengumuman
     * const pengumuman = await prisma.pengumuman.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends pengumumanFindFirstArgs>(args?: SelectSubset<T, pengumumanFindFirstArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Pengumuman that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengumumanFindFirstOrThrowArgs} args - Arguments to find a Pengumuman
     * @example
     * // Get one Pengumuman
     * const pengumuman = await prisma.pengumuman.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends pengumumanFindFirstOrThrowArgs>(args?: SelectSubset<T, pengumumanFindFirstOrThrowArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Pengumumen that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengumumanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Pengumumen
     * const pengumumen = await prisma.pengumuman.findMany()
     * 
     * // Get first 10 Pengumumen
     * const pengumumen = await prisma.pengumuman.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pengumumanWithIdOnly = await prisma.pengumuman.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends pengumumanFindManyArgs>(args?: SelectSubset<T, pengumumanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Pengumuman.
     * @param {pengumumanCreateArgs} args - Arguments to create a Pengumuman.
     * @example
     * // Create one Pengumuman
     * const Pengumuman = await prisma.pengumuman.create({
     *   data: {
     *     // ... data to create a Pengumuman
     *   }
     * })
     * 
     */
    create<T extends pengumumanCreateArgs>(args: SelectSubset<T, pengumumanCreateArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Pengumumen.
     * @param {pengumumanCreateManyArgs} args - Arguments to create many Pengumumen.
     * @example
     * // Create many Pengumumen
     * const pengumuman = await prisma.pengumuman.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends pengumumanCreateManyArgs>(args?: SelectSubset<T, pengumumanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Pengumuman.
     * @param {pengumumanDeleteArgs} args - Arguments to delete one Pengumuman.
     * @example
     * // Delete one Pengumuman
     * const Pengumuman = await prisma.pengumuman.delete({
     *   where: {
     *     // ... filter to delete one Pengumuman
     *   }
     * })
     * 
     */
    delete<T extends pengumumanDeleteArgs>(args: SelectSubset<T, pengumumanDeleteArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Pengumuman.
     * @param {pengumumanUpdateArgs} args - Arguments to update one Pengumuman.
     * @example
     * // Update one Pengumuman
     * const pengumuman = await prisma.pengumuman.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends pengumumanUpdateArgs>(args: SelectSubset<T, pengumumanUpdateArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Pengumumen.
     * @param {pengumumanDeleteManyArgs} args - Arguments to filter Pengumumen to delete.
     * @example
     * // Delete a few Pengumumen
     * const { count } = await prisma.pengumuman.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends pengumumanDeleteManyArgs>(args?: SelectSubset<T, pengumumanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Pengumumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengumumanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Pengumumen
     * const pengumuman = await prisma.pengumuman.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends pengumumanUpdateManyArgs>(args: SelectSubset<T, pengumumanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Pengumuman.
     * @param {pengumumanUpsertArgs} args - Arguments to update or create a Pengumuman.
     * @example
     * // Update or create a Pengumuman
     * const pengumuman = await prisma.pengumuman.upsert({
     *   create: {
     *     // ... data to create a Pengumuman
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Pengumuman we want to update
     *   }
     * })
     */
    upsert<T extends pengumumanUpsertArgs>(args: SelectSubset<T, pengumumanUpsertArgs<ExtArgs>>): Prisma__pengumumanClient<$Result.GetResult<Prisma.$pengumumanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Pengumumen.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengumumanCountArgs} args - Arguments to filter Pengumumen to count.
     * @example
     * // Count the number of Pengumumen
     * const count = await prisma.pengumuman.count({
     *   where: {
     *     // ... the filter for the Pengumumen we want to count
     *   }
     * })
    **/
    count<T extends pengumumanCountArgs>(
      args?: Subset<T, pengumumanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PengumumanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Pengumuman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PengumumanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PengumumanAggregateArgs>(args: Subset<T, PengumumanAggregateArgs>): Prisma.PrismaPromise<GetPengumumanAggregateType<T>>

    /**
     * Group by Pengumuman.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {pengumumanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends pengumumanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: pengumumanGroupByArgs['orderBy'] }
        : { orderBy?: pengumumanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, pengumumanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPengumumanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the pengumuman model
   */
  readonly fields: pengumumanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for pengumuman.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__pengumumanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the pengumuman model
   */
  interface pengumumanFieldRefs {
    readonly id: FieldRef<"pengumuman", 'Int'>
    readonly pengumuman: FieldRef<"pengumuman", 'String'>
    readonly icon: FieldRef<"pengumuman", 'String'>
    readonly icon_position: FieldRef<"pengumuman", 'String'>
    readonly highlight: FieldRef<"pengumuman", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * pengumuman findUnique
   */
  export type pengumumanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengumuman
     */
    omit?: pengumumanOmit<ExtArgs> | null
    /**
     * Filter, which pengumuman to fetch.
     */
    where: pengumumanWhereUniqueInput
  }

  /**
   * pengumuman findUniqueOrThrow
   */
  export type pengumumanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengumuman
     */
    omit?: pengumumanOmit<ExtArgs> | null
    /**
     * Filter, which pengumuman to fetch.
     */
    where: pengumumanWhereUniqueInput
  }

  /**
   * pengumuman findFirst
   */
  export type pengumumanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengumuman
     */
    omit?: pengumumanOmit<ExtArgs> | null
    /**
     * Filter, which pengumuman to fetch.
     */
    where?: pengumumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pengumumen to fetch.
     */
    orderBy?: pengumumanOrderByWithRelationInput | pengumumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pengumumen.
     */
    cursor?: pengumumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pengumumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pengumumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pengumumen.
     */
    distinct?: PengumumanScalarFieldEnum | PengumumanScalarFieldEnum[]
  }

  /**
   * pengumuman findFirstOrThrow
   */
  export type pengumumanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengumuman
     */
    omit?: pengumumanOmit<ExtArgs> | null
    /**
     * Filter, which pengumuman to fetch.
     */
    where?: pengumumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pengumumen to fetch.
     */
    orderBy?: pengumumanOrderByWithRelationInput | pengumumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for pengumumen.
     */
    cursor?: pengumumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pengumumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pengumumen.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of pengumumen.
     */
    distinct?: PengumumanScalarFieldEnum | PengumumanScalarFieldEnum[]
  }

  /**
   * pengumuman findMany
   */
  export type pengumumanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengumuman
     */
    omit?: pengumumanOmit<ExtArgs> | null
    /**
     * Filter, which pengumumen to fetch.
     */
    where?: pengumumanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of pengumumen to fetch.
     */
    orderBy?: pengumumanOrderByWithRelationInput | pengumumanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing pengumumen.
     */
    cursor?: pengumumanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` pengumumen from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` pengumumen.
     */
    skip?: number
    distinct?: PengumumanScalarFieldEnum | PengumumanScalarFieldEnum[]
  }

  /**
   * pengumuman create
   */
  export type pengumumanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengumuman
     */
    omit?: pengumumanOmit<ExtArgs> | null
    /**
     * The data needed to create a pengumuman.
     */
    data: XOR<pengumumanCreateInput, pengumumanUncheckedCreateInput>
  }

  /**
   * pengumuman createMany
   */
  export type pengumumanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many pengumumen.
     */
    data: pengumumanCreateManyInput | pengumumanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * pengumuman update
   */
  export type pengumumanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengumuman
     */
    omit?: pengumumanOmit<ExtArgs> | null
    /**
     * The data needed to update a pengumuman.
     */
    data: XOR<pengumumanUpdateInput, pengumumanUncheckedUpdateInput>
    /**
     * Choose, which pengumuman to update.
     */
    where: pengumumanWhereUniqueInput
  }

  /**
   * pengumuman updateMany
   */
  export type pengumumanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update pengumumen.
     */
    data: XOR<pengumumanUpdateManyMutationInput, pengumumanUncheckedUpdateManyInput>
    /**
     * Filter which pengumumen to update
     */
    where?: pengumumanWhereInput
    /**
     * Limit how many pengumumen to update.
     */
    limit?: number
  }

  /**
   * pengumuman upsert
   */
  export type pengumumanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengumuman
     */
    omit?: pengumumanOmit<ExtArgs> | null
    /**
     * The filter to search for the pengumuman to update in case it exists.
     */
    where: pengumumanWhereUniqueInput
    /**
     * In case the pengumuman found by the `where` argument doesn't exist, create a new pengumuman with this data.
     */
    create: XOR<pengumumanCreateInput, pengumumanUncheckedCreateInput>
    /**
     * In case the pengumuman was found with the provided `where` argument, update it with this data.
     */
    update: XOR<pengumumanUpdateInput, pengumumanUncheckedUpdateInput>
  }

  /**
   * pengumuman delete
   */
  export type pengumumanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengumuman
     */
    omit?: pengumumanOmit<ExtArgs> | null
    /**
     * Filter which pengumuman to delete.
     */
    where: pengumumanWhereUniqueInput
  }

  /**
   * pengumuman deleteMany
   */
  export type pengumumanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which pengumumen to delete
     */
    where?: pengumumanWhereInput
    /**
     * Limit how many pengumumen to delete.
     */
    limit?: number
  }

  /**
   * pengumuman without action
   */
  export type pengumumanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the pengumuman
     */
    select?: pengumumanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the pengumuman
     */
    omit?: pengumumanOmit<ExtArgs> | null
  }


  /**
   * Model kode_promo
   */

  export type AggregateKode_promo = {
    _count: Kode_promoCountAggregateOutputType | null
    _avg: Kode_promoAvgAggregateOutputType | null
    _sum: Kode_promoSumAggregateOutputType | null
    _min: Kode_promoMinAggregateOutputType | null
    _max: Kode_promoMaxAggregateOutputType | null
  }

  export type Kode_promoAvgAggregateOutputType = {
    id: number | null
    diskon: number | null
    max_claims: number | null
    current_claims: number | null
    min_purchase: number | null
    max_discount: number | null
  }

  export type Kode_promoSumAggregateOutputType = {
    id: number | null
    diskon: number | null
    max_claims: number | null
    current_claims: number | null
    min_purchase: number | null
    max_discount: number | null
  }

  export type Kode_promoMinAggregateOutputType = {
    id: number | null
    kode: string | null
    diskon: number | null
    start_date: Date | null
    end_date: Date | null
    max_claims: number | null
    current_claims: number | null
    min_purchase: number | null
    max_discount: number | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Kode_promoMaxAggregateOutputType = {
    id: number | null
    kode: string | null
    diskon: number | null
    start_date: Date | null
    end_date: Date | null
    max_claims: number | null
    current_claims: number | null
    min_purchase: number | null
    max_discount: number | null
    active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Kode_promoCountAggregateOutputType = {
    id: number
    kode: number
    diskon: number
    start_date: number
    end_date: number
    max_claims: number
    current_claims: number
    min_purchase: number
    max_discount: number
    active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Kode_promoAvgAggregateInputType = {
    id?: true
    diskon?: true
    max_claims?: true
    current_claims?: true
    min_purchase?: true
    max_discount?: true
  }

  export type Kode_promoSumAggregateInputType = {
    id?: true
    diskon?: true
    max_claims?: true
    current_claims?: true
    min_purchase?: true
    max_discount?: true
  }

  export type Kode_promoMinAggregateInputType = {
    id?: true
    kode?: true
    diskon?: true
    start_date?: true
    end_date?: true
    max_claims?: true
    current_claims?: true
    min_purchase?: true
    max_discount?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type Kode_promoMaxAggregateInputType = {
    id?: true
    kode?: true
    diskon?: true
    start_date?: true
    end_date?: true
    max_claims?: true
    current_claims?: true
    min_purchase?: true
    max_discount?: true
    active?: true
    created_at?: true
    updated_at?: true
  }

  export type Kode_promoCountAggregateInputType = {
    id?: true
    kode?: true
    diskon?: true
    start_date?: true
    end_date?: true
    max_claims?: true
    current_claims?: true
    min_purchase?: true
    max_discount?: true
    active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Kode_promoAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kode_promo to aggregate.
     */
    where?: kode_promoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kode_promos to fetch.
     */
    orderBy?: kode_promoOrderByWithRelationInput | kode_promoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: kode_promoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kode_promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kode_promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned kode_promos
    **/
    _count?: true | Kode_promoCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Kode_promoAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Kode_promoSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Kode_promoMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Kode_promoMaxAggregateInputType
  }

  export type GetKode_promoAggregateType<T extends Kode_promoAggregateArgs> = {
        [P in keyof T & keyof AggregateKode_promo]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateKode_promo[P]>
      : GetScalarType<T[P], AggregateKode_promo[P]>
  }




  export type kode_promoGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: kode_promoWhereInput
    orderBy?: kode_promoOrderByWithAggregationInput | kode_promoOrderByWithAggregationInput[]
    by: Kode_promoScalarFieldEnum[] | Kode_promoScalarFieldEnum
    having?: kode_promoScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Kode_promoCountAggregateInputType | true
    _avg?: Kode_promoAvgAggregateInputType
    _sum?: Kode_promoSumAggregateInputType
    _min?: Kode_promoMinAggregateInputType
    _max?: Kode_promoMaxAggregateInputType
  }

  export type Kode_promoGroupByOutputType = {
    id: number
    kode: string
    diskon: number
    start_date: Date | null
    end_date: Date | null
    max_claims: number | null
    current_claims: number
    min_purchase: number | null
    max_discount: number | null
    active: boolean
    created_at: Date
    updated_at: Date
    _count: Kode_promoCountAggregateOutputType | null
    _avg: Kode_promoAvgAggregateOutputType | null
    _sum: Kode_promoSumAggregateOutputType | null
    _min: Kode_promoMinAggregateOutputType | null
    _max: Kode_promoMaxAggregateOutputType | null
  }

  type GetKode_promoGroupByPayload<T extends kode_promoGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Kode_promoGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Kode_promoGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Kode_promoGroupByOutputType[P]>
            : GetScalarType<T[P], Kode_promoGroupByOutputType[P]>
        }
      >
    >


  export type kode_promoSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    kode?: boolean
    diskon?: boolean
    start_date?: boolean
    end_date?: boolean
    max_claims?: boolean
    current_claims?: boolean
    min_purchase?: boolean
    max_discount?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["kode_promo"]>



  export type kode_promoSelectScalar = {
    id?: boolean
    kode?: boolean
    diskon?: boolean
    start_date?: boolean
    end_date?: boolean
    max_claims?: boolean
    current_claims?: boolean
    min_purchase?: boolean
    max_discount?: boolean
    active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type kode_promoOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "kode" | "diskon" | "start_date" | "end_date" | "max_claims" | "current_claims" | "min_purchase" | "max_discount" | "active" | "created_at" | "updated_at", ExtArgs["result"]["kode_promo"]>

  export type $kode_promoPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "kode_promo"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      kode: string
      diskon: number
      start_date: Date | null
      end_date: Date | null
      max_claims: number | null
      current_claims: number
      min_purchase: number | null
      max_discount: number | null
      active: boolean
      created_at: Date
      updated_at: Date
    }, ExtArgs["result"]["kode_promo"]>
    composites: {}
  }

  type kode_promoGetPayload<S extends boolean | null | undefined | kode_promoDefaultArgs> = $Result.GetResult<Prisma.$kode_promoPayload, S>

  type kode_promoCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<kode_promoFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Kode_promoCountAggregateInputType | true
    }

  export interface kode_promoDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['kode_promo'], meta: { name: 'kode_promo' } }
    /**
     * Find zero or one Kode_promo that matches the filter.
     * @param {kode_promoFindUniqueArgs} args - Arguments to find a Kode_promo
     * @example
     * // Get one Kode_promo
     * const kode_promo = await prisma.kode_promo.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends kode_promoFindUniqueArgs>(args: SelectSubset<T, kode_promoFindUniqueArgs<ExtArgs>>): Prisma__kode_promoClient<$Result.GetResult<Prisma.$kode_promoPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Kode_promo that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {kode_promoFindUniqueOrThrowArgs} args - Arguments to find a Kode_promo
     * @example
     * // Get one Kode_promo
     * const kode_promo = await prisma.kode_promo.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends kode_promoFindUniqueOrThrowArgs>(args: SelectSubset<T, kode_promoFindUniqueOrThrowArgs<ExtArgs>>): Prisma__kode_promoClient<$Result.GetResult<Prisma.$kode_promoPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kode_promo that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kode_promoFindFirstArgs} args - Arguments to find a Kode_promo
     * @example
     * // Get one Kode_promo
     * const kode_promo = await prisma.kode_promo.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends kode_promoFindFirstArgs>(args?: SelectSubset<T, kode_promoFindFirstArgs<ExtArgs>>): Prisma__kode_promoClient<$Result.GetResult<Prisma.$kode_promoPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Kode_promo that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kode_promoFindFirstOrThrowArgs} args - Arguments to find a Kode_promo
     * @example
     * // Get one Kode_promo
     * const kode_promo = await prisma.kode_promo.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends kode_promoFindFirstOrThrowArgs>(args?: SelectSubset<T, kode_promoFindFirstOrThrowArgs<ExtArgs>>): Prisma__kode_promoClient<$Result.GetResult<Prisma.$kode_promoPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Kode_promos that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kode_promoFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Kode_promos
     * const kode_promos = await prisma.kode_promo.findMany()
     * 
     * // Get first 10 Kode_promos
     * const kode_promos = await prisma.kode_promo.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const kode_promoWithIdOnly = await prisma.kode_promo.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends kode_promoFindManyArgs>(args?: SelectSubset<T, kode_promoFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$kode_promoPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Kode_promo.
     * @param {kode_promoCreateArgs} args - Arguments to create a Kode_promo.
     * @example
     * // Create one Kode_promo
     * const Kode_promo = await prisma.kode_promo.create({
     *   data: {
     *     // ... data to create a Kode_promo
     *   }
     * })
     * 
     */
    create<T extends kode_promoCreateArgs>(args: SelectSubset<T, kode_promoCreateArgs<ExtArgs>>): Prisma__kode_promoClient<$Result.GetResult<Prisma.$kode_promoPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Kode_promos.
     * @param {kode_promoCreateManyArgs} args - Arguments to create many Kode_promos.
     * @example
     * // Create many Kode_promos
     * const kode_promo = await prisma.kode_promo.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends kode_promoCreateManyArgs>(args?: SelectSubset<T, kode_promoCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Kode_promo.
     * @param {kode_promoDeleteArgs} args - Arguments to delete one Kode_promo.
     * @example
     * // Delete one Kode_promo
     * const Kode_promo = await prisma.kode_promo.delete({
     *   where: {
     *     // ... filter to delete one Kode_promo
     *   }
     * })
     * 
     */
    delete<T extends kode_promoDeleteArgs>(args: SelectSubset<T, kode_promoDeleteArgs<ExtArgs>>): Prisma__kode_promoClient<$Result.GetResult<Prisma.$kode_promoPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Kode_promo.
     * @param {kode_promoUpdateArgs} args - Arguments to update one Kode_promo.
     * @example
     * // Update one Kode_promo
     * const kode_promo = await prisma.kode_promo.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends kode_promoUpdateArgs>(args: SelectSubset<T, kode_promoUpdateArgs<ExtArgs>>): Prisma__kode_promoClient<$Result.GetResult<Prisma.$kode_promoPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Kode_promos.
     * @param {kode_promoDeleteManyArgs} args - Arguments to filter Kode_promos to delete.
     * @example
     * // Delete a few Kode_promos
     * const { count } = await prisma.kode_promo.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends kode_promoDeleteManyArgs>(args?: SelectSubset<T, kode_promoDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Kode_promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kode_promoUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Kode_promos
     * const kode_promo = await prisma.kode_promo.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends kode_promoUpdateManyArgs>(args: SelectSubset<T, kode_promoUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Kode_promo.
     * @param {kode_promoUpsertArgs} args - Arguments to update or create a Kode_promo.
     * @example
     * // Update or create a Kode_promo
     * const kode_promo = await prisma.kode_promo.upsert({
     *   create: {
     *     // ... data to create a Kode_promo
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Kode_promo we want to update
     *   }
     * })
     */
    upsert<T extends kode_promoUpsertArgs>(args: SelectSubset<T, kode_promoUpsertArgs<ExtArgs>>): Prisma__kode_promoClient<$Result.GetResult<Prisma.$kode_promoPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Kode_promos.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kode_promoCountArgs} args - Arguments to filter Kode_promos to count.
     * @example
     * // Count the number of Kode_promos
     * const count = await prisma.kode_promo.count({
     *   where: {
     *     // ... the filter for the Kode_promos we want to count
     *   }
     * })
    **/
    count<T extends kode_promoCountArgs>(
      args?: Subset<T, kode_promoCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Kode_promoCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Kode_promo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Kode_promoAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Kode_promoAggregateArgs>(args: Subset<T, Kode_promoAggregateArgs>): Prisma.PrismaPromise<GetKode_promoAggregateType<T>>

    /**
     * Group by Kode_promo.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {kode_promoGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends kode_promoGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: kode_promoGroupByArgs['orderBy'] }
        : { orderBy?: kode_promoGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, kode_promoGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetKode_promoGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the kode_promo model
   */
  readonly fields: kode_promoFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for kode_promo.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__kode_promoClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the kode_promo model
   */
  interface kode_promoFieldRefs {
    readonly id: FieldRef<"kode_promo", 'Int'>
    readonly kode: FieldRef<"kode_promo", 'String'>
    readonly diskon: FieldRef<"kode_promo", 'Float'>
    readonly start_date: FieldRef<"kode_promo", 'DateTime'>
    readonly end_date: FieldRef<"kode_promo", 'DateTime'>
    readonly max_claims: FieldRef<"kode_promo", 'Int'>
    readonly current_claims: FieldRef<"kode_promo", 'Int'>
    readonly min_purchase: FieldRef<"kode_promo", 'Float'>
    readonly max_discount: FieldRef<"kode_promo", 'Float'>
    readonly active: FieldRef<"kode_promo", 'Boolean'>
    readonly created_at: FieldRef<"kode_promo", 'DateTime'>
    readonly updated_at: FieldRef<"kode_promo", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * kode_promo findUnique
   */
  export type kode_promoFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kode_promo
     */
    select?: kode_promoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kode_promo
     */
    omit?: kode_promoOmit<ExtArgs> | null
    /**
     * Filter, which kode_promo to fetch.
     */
    where: kode_promoWhereUniqueInput
  }

  /**
   * kode_promo findUniqueOrThrow
   */
  export type kode_promoFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kode_promo
     */
    select?: kode_promoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kode_promo
     */
    omit?: kode_promoOmit<ExtArgs> | null
    /**
     * Filter, which kode_promo to fetch.
     */
    where: kode_promoWhereUniqueInput
  }

  /**
   * kode_promo findFirst
   */
  export type kode_promoFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kode_promo
     */
    select?: kode_promoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kode_promo
     */
    omit?: kode_promoOmit<ExtArgs> | null
    /**
     * Filter, which kode_promo to fetch.
     */
    where?: kode_promoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kode_promos to fetch.
     */
    orderBy?: kode_promoOrderByWithRelationInput | kode_promoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kode_promos.
     */
    cursor?: kode_promoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kode_promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kode_promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kode_promos.
     */
    distinct?: Kode_promoScalarFieldEnum | Kode_promoScalarFieldEnum[]
  }

  /**
   * kode_promo findFirstOrThrow
   */
  export type kode_promoFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kode_promo
     */
    select?: kode_promoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kode_promo
     */
    omit?: kode_promoOmit<ExtArgs> | null
    /**
     * Filter, which kode_promo to fetch.
     */
    where?: kode_promoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kode_promos to fetch.
     */
    orderBy?: kode_promoOrderByWithRelationInput | kode_promoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for kode_promos.
     */
    cursor?: kode_promoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kode_promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kode_promos.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of kode_promos.
     */
    distinct?: Kode_promoScalarFieldEnum | Kode_promoScalarFieldEnum[]
  }

  /**
   * kode_promo findMany
   */
  export type kode_promoFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kode_promo
     */
    select?: kode_promoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kode_promo
     */
    omit?: kode_promoOmit<ExtArgs> | null
    /**
     * Filter, which kode_promos to fetch.
     */
    where?: kode_promoWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of kode_promos to fetch.
     */
    orderBy?: kode_promoOrderByWithRelationInput | kode_promoOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing kode_promos.
     */
    cursor?: kode_promoWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` kode_promos from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` kode_promos.
     */
    skip?: number
    distinct?: Kode_promoScalarFieldEnum | Kode_promoScalarFieldEnum[]
  }

  /**
   * kode_promo create
   */
  export type kode_promoCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kode_promo
     */
    select?: kode_promoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kode_promo
     */
    omit?: kode_promoOmit<ExtArgs> | null
    /**
     * The data needed to create a kode_promo.
     */
    data: XOR<kode_promoCreateInput, kode_promoUncheckedCreateInput>
  }

  /**
   * kode_promo createMany
   */
  export type kode_promoCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many kode_promos.
     */
    data: kode_promoCreateManyInput | kode_promoCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * kode_promo update
   */
  export type kode_promoUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kode_promo
     */
    select?: kode_promoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kode_promo
     */
    omit?: kode_promoOmit<ExtArgs> | null
    /**
     * The data needed to update a kode_promo.
     */
    data: XOR<kode_promoUpdateInput, kode_promoUncheckedUpdateInput>
    /**
     * Choose, which kode_promo to update.
     */
    where: kode_promoWhereUniqueInput
  }

  /**
   * kode_promo updateMany
   */
  export type kode_promoUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update kode_promos.
     */
    data: XOR<kode_promoUpdateManyMutationInput, kode_promoUncheckedUpdateManyInput>
    /**
     * Filter which kode_promos to update
     */
    where?: kode_promoWhereInput
    /**
     * Limit how many kode_promos to update.
     */
    limit?: number
  }

  /**
   * kode_promo upsert
   */
  export type kode_promoUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kode_promo
     */
    select?: kode_promoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kode_promo
     */
    omit?: kode_promoOmit<ExtArgs> | null
    /**
     * The filter to search for the kode_promo to update in case it exists.
     */
    where: kode_promoWhereUniqueInput
    /**
     * In case the kode_promo found by the `where` argument doesn't exist, create a new kode_promo with this data.
     */
    create: XOR<kode_promoCreateInput, kode_promoUncheckedCreateInput>
    /**
     * In case the kode_promo was found with the provided `where` argument, update it with this data.
     */
    update: XOR<kode_promoUpdateInput, kode_promoUncheckedUpdateInput>
  }

  /**
   * kode_promo delete
   */
  export type kode_promoDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kode_promo
     */
    select?: kode_promoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kode_promo
     */
    omit?: kode_promoOmit<ExtArgs> | null
    /**
     * Filter which kode_promo to delete.
     */
    where: kode_promoWhereUniqueInput
  }

  /**
   * kode_promo deleteMany
   */
  export type kode_promoDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which kode_promos to delete
     */
    where?: kode_promoWhereInput
    /**
     * Limit how many kode_promos to delete.
     */
    limit?: number
  }

  /**
   * kode_promo without action
   */
  export type kode_promoDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the kode_promo
     */
    select?: kode_promoSelect<ExtArgs> | null
    /**
     * Omit specific fields from the kode_promo
     */
    omit?: kode_promoOmit<ExtArgs> | null
  }


  /**
   * Model flash_sale
   */

  export type AggregateFlash_sale = {
    _count: Flash_saleCountAggregateOutputType | null
    _avg: Flash_saleAvgAggregateOutputType | null
    _sum: Flash_saleSumAggregateOutputType | null
    _min: Flash_saleMinAggregateOutputType | null
    _max: Flash_saleMaxAggregateOutputType | null
  }

  export type Flash_saleAvgAggregateOutputType = {
    id: number | null
    diskon: number | null
  }

  export type Flash_saleSumAggregateOutputType = {
    id: number | null
    diskon: number | null
  }

  export type Flash_saleMinAggregateOutputType = {
    id: number | null
    diskon: number | null
    start_date: Date | null
    end_date: Date | null
  }

  export type Flash_saleMaxAggregateOutputType = {
    id: number | null
    diskon: number | null
    start_date: Date | null
    end_date: Date | null
  }

  export type Flash_saleCountAggregateOutputType = {
    id: number
    diskon: number
    start_date: number
    end_date: number
    _all: number
  }


  export type Flash_saleAvgAggregateInputType = {
    id?: true
    diskon?: true
  }

  export type Flash_saleSumAggregateInputType = {
    id?: true
    diskon?: true
  }

  export type Flash_saleMinAggregateInputType = {
    id?: true
    diskon?: true
    start_date?: true
    end_date?: true
  }

  export type Flash_saleMaxAggregateInputType = {
    id?: true
    diskon?: true
    start_date?: true
    end_date?: true
  }

  export type Flash_saleCountAggregateInputType = {
    id?: true
    diskon?: true
    start_date?: true
    end_date?: true
    _all?: true
  }

  export type Flash_saleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flash_sale to aggregate.
     */
    where?: flash_saleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flash_sales to fetch.
     */
    orderBy?: flash_saleOrderByWithRelationInput | flash_saleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: flash_saleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flash_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flash_sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned flash_sales
    **/
    _count?: true | Flash_saleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Flash_saleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Flash_saleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Flash_saleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Flash_saleMaxAggregateInputType
  }

  export type GetFlash_saleAggregateType<T extends Flash_saleAggregateArgs> = {
        [P in keyof T & keyof AggregateFlash_sale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlash_sale[P]>
      : GetScalarType<T[P], AggregateFlash_sale[P]>
  }




  export type flash_saleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: flash_saleWhereInput
    orderBy?: flash_saleOrderByWithAggregationInput | flash_saleOrderByWithAggregationInput[]
    by: Flash_saleScalarFieldEnum[] | Flash_saleScalarFieldEnum
    having?: flash_saleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Flash_saleCountAggregateInputType | true
    _avg?: Flash_saleAvgAggregateInputType
    _sum?: Flash_saleSumAggregateInputType
    _min?: Flash_saleMinAggregateInputType
    _max?: Flash_saleMaxAggregateInputType
  }

  export type Flash_saleGroupByOutputType = {
    id: number
    diskon: number
    start_date: Date
    end_date: Date
    _count: Flash_saleCountAggregateOutputType | null
    _avg: Flash_saleAvgAggregateOutputType | null
    _sum: Flash_saleSumAggregateOutputType | null
    _min: Flash_saleMinAggregateOutputType | null
    _max: Flash_saleMaxAggregateOutputType | null
  }

  type GetFlash_saleGroupByPayload<T extends flash_saleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Flash_saleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Flash_saleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Flash_saleGroupByOutputType[P]>
            : GetScalarType<T[P], Flash_saleGroupByOutputType[P]>
        }
      >
    >


  export type flash_saleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    diskon?: boolean
    start_date?: boolean
    end_date?: boolean
  }, ExtArgs["result"]["flash_sale"]>



  export type flash_saleSelectScalar = {
    id?: boolean
    diskon?: boolean
    start_date?: boolean
    end_date?: boolean
  }

  export type flash_saleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "diskon" | "start_date" | "end_date", ExtArgs["result"]["flash_sale"]>

  export type $flash_salePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "flash_sale"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      diskon: number
      start_date: Date
      end_date: Date
    }, ExtArgs["result"]["flash_sale"]>
    composites: {}
  }

  type flash_saleGetPayload<S extends boolean | null | undefined | flash_saleDefaultArgs> = $Result.GetResult<Prisma.$flash_salePayload, S>

  type flash_saleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<flash_saleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Flash_saleCountAggregateInputType | true
    }

  export interface flash_saleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['flash_sale'], meta: { name: 'flash_sale' } }
    /**
     * Find zero or one Flash_sale that matches the filter.
     * @param {flash_saleFindUniqueArgs} args - Arguments to find a Flash_sale
     * @example
     * // Get one Flash_sale
     * const flash_sale = await prisma.flash_sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends flash_saleFindUniqueArgs>(args: SelectSubset<T, flash_saleFindUniqueArgs<ExtArgs>>): Prisma__flash_saleClient<$Result.GetResult<Prisma.$flash_salePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Flash_sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {flash_saleFindUniqueOrThrowArgs} args - Arguments to find a Flash_sale
     * @example
     * // Get one Flash_sale
     * const flash_sale = await prisma.flash_sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends flash_saleFindUniqueOrThrowArgs>(args: SelectSubset<T, flash_saleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__flash_saleClient<$Result.GetResult<Prisma.$flash_salePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flash_sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flash_saleFindFirstArgs} args - Arguments to find a Flash_sale
     * @example
     * // Get one Flash_sale
     * const flash_sale = await prisma.flash_sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends flash_saleFindFirstArgs>(args?: SelectSubset<T, flash_saleFindFirstArgs<ExtArgs>>): Prisma__flash_saleClient<$Result.GetResult<Prisma.$flash_salePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Flash_sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flash_saleFindFirstOrThrowArgs} args - Arguments to find a Flash_sale
     * @example
     * // Get one Flash_sale
     * const flash_sale = await prisma.flash_sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends flash_saleFindFirstOrThrowArgs>(args?: SelectSubset<T, flash_saleFindFirstOrThrowArgs<ExtArgs>>): Prisma__flash_saleClient<$Result.GetResult<Prisma.$flash_salePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Flash_sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flash_saleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Flash_sales
     * const flash_sales = await prisma.flash_sale.findMany()
     * 
     * // Get first 10 Flash_sales
     * const flash_sales = await prisma.flash_sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flash_saleWithIdOnly = await prisma.flash_sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends flash_saleFindManyArgs>(args?: SelectSubset<T, flash_saleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$flash_salePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Flash_sale.
     * @param {flash_saleCreateArgs} args - Arguments to create a Flash_sale.
     * @example
     * // Create one Flash_sale
     * const Flash_sale = await prisma.flash_sale.create({
     *   data: {
     *     // ... data to create a Flash_sale
     *   }
     * })
     * 
     */
    create<T extends flash_saleCreateArgs>(args: SelectSubset<T, flash_saleCreateArgs<ExtArgs>>): Prisma__flash_saleClient<$Result.GetResult<Prisma.$flash_salePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Flash_sales.
     * @param {flash_saleCreateManyArgs} args - Arguments to create many Flash_sales.
     * @example
     * // Create many Flash_sales
     * const flash_sale = await prisma.flash_sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends flash_saleCreateManyArgs>(args?: SelectSubset<T, flash_saleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Flash_sale.
     * @param {flash_saleDeleteArgs} args - Arguments to delete one Flash_sale.
     * @example
     * // Delete one Flash_sale
     * const Flash_sale = await prisma.flash_sale.delete({
     *   where: {
     *     // ... filter to delete one Flash_sale
     *   }
     * })
     * 
     */
    delete<T extends flash_saleDeleteArgs>(args: SelectSubset<T, flash_saleDeleteArgs<ExtArgs>>): Prisma__flash_saleClient<$Result.GetResult<Prisma.$flash_salePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Flash_sale.
     * @param {flash_saleUpdateArgs} args - Arguments to update one Flash_sale.
     * @example
     * // Update one Flash_sale
     * const flash_sale = await prisma.flash_sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends flash_saleUpdateArgs>(args: SelectSubset<T, flash_saleUpdateArgs<ExtArgs>>): Prisma__flash_saleClient<$Result.GetResult<Prisma.$flash_salePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Flash_sales.
     * @param {flash_saleDeleteManyArgs} args - Arguments to filter Flash_sales to delete.
     * @example
     * // Delete a few Flash_sales
     * const { count } = await prisma.flash_sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends flash_saleDeleteManyArgs>(args?: SelectSubset<T, flash_saleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Flash_sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flash_saleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Flash_sales
     * const flash_sale = await prisma.flash_sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends flash_saleUpdateManyArgs>(args: SelectSubset<T, flash_saleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Flash_sale.
     * @param {flash_saleUpsertArgs} args - Arguments to update or create a Flash_sale.
     * @example
     * // Update or create a Flash_sale
     * const flash_sale = await prisma.flash_sale.upsert({
     *   create: {
     *     // ... data to create a Flash_sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Flash_sale we want to update
     *   }
     * })
     */
    upsert<T extends flash_saleUpsertArgs>(args: SelectSubset<T, flash_saleUpsertArgs<ExtArgs>>): Prisma__flash_saleClient<$Result.GetResult<Prisma.$flash_salePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Flash_sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flash_saleCountArgs} args - Arguments to filter Flash_sales to count.
     * @example
     * // Count the number of Flash_sales
     * const count = await prisma.flash_sale.count({
     *   where: {
     *     // ... the filter for the Flash_sales we want to count
     *   }
     * })
    **/
    count<T extends flash_saleCountArgs>(
      args?: Subset<T, flash_saleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Flash_saleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Flash_sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Flash_saleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Flash_saleAggregateArgs>(args: Subset<T, Flash_saleAggregateArgs>): Prisma.PrismaPromise<GetFlash_saleAggregateType<T>>

    /**
     * Group by Flash_sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {flash_saleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends flash_saleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: flash_saleGroupByArgs['orderBy'] }
        : { orderBy?: flash_saleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, flash_saleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlash_saleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the flash_sale model
   */
  readonly fields: flash_saleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for flash_sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__flash_saleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the flash_sale model
   */
  interface flash_saleFieldRefs {
    readonly id: FieldRef<"flash_sale", 'Int'>
    readonly diskon: FieldRef<"flash_sale", 'Int'>
    readonly start_date: FieldRef<"flash_sale", 'DateTime'>
    readonly end_date: FieldRef<"flash_sale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * flash_sale findUnique
   */
  export type flash_saleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flash_sale
     */
    select?: flash_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flash_sale
     */
    omit?: flash_saleOmit<ExtArgs> | null
    /**
     * Filter, which flash_sale to fetch.
     */
    where: flash_saleWhereUniqueInput
  }

  /**
   * flash_sale findUniqueOrThrow
   */
  export type flash_saleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flash_sale
     */
    select?: flash_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flash_sale
     */
    omit?: flash_saleOmit<ExtArgs> | null
    /**
     * Filter, which flash_sale to fetch.
     */
    where: flash_saleWhereUniqueInput
  }

  /**
   * flash_sale findFirst
   */
  export type flash_saleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flash_sale
     */
    select?: flash_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flash_sale
     */
    omit?: flash_saleOmit<ExtArgs> | null
    /**
     * Filter, which flash_sale to fetch.
     */
    where?: flash_saleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flash_sales to fetch.
     */
    orderBy?: flash_saleOrderByWithRelationInput | flash_saleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flash_sales.
     */
    cursor?: flash_saleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flash_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flash_sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flash_sales.
     */
    distinct?: Flash_saleScalarFieldEnum | Flash_saleScalarFieldEnum[]
  }

  /**
   * flash_sale findFirstOrThrow
   */
  export type flash_saleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flash_sale
     */
    select?: flash_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flash_sale
     */
    omit?: flash_saleOmit<ExtArgs> | null
    /**
     * Filter, which flash_sale to fetch.
     */
    where?: flash_saleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flash_sales to fetch.
     */
    orderBy?: flash_saleOrderByWithRelationInput | flash_saleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for flash_sales.
     */
    cursor?: flash_saleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flash_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flash_sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of flash_sales.
     */
    distinct?: Flash_saleScalarFieldEnum | Flash_saleScalarFieldEnum[]
  }

  /**
   * flash_sale findMany
   */
  export type flash_saleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flash_sale
     */
    select?: flash_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flash_sale
     */
    omit?: flash_saleOmit<ExtArgs> | null
    /**
     * Filter, which flash_sales to fetch.
     */
    where?: flash_saleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of flash_sales to fetch.
     */
    orderBy?: flash_saleOrderByWithRelationInput | flash_saleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing flash_sales.
     */
    cursor?: flash_saleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` flash_sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` flash_sales.
     */
    skip?: number
    distinct?: Flash_saleScalarFieldEnum | Flash_saleScalarFieldEnum[]
  }

  /**
   * flash_sale create
   */
  export type flash_saleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flash_sale
     */
    select?: flash_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flash_sale
     */
    omit?: flash_saleOmit<ExtArgs> | null
    /**
     * The data needed to create a flash_sale.
     */
    data: XOR<flash_saleCreateInput, flash_saleUncheckedCreateInput>
  }

  /**
   * flash_sale createMany
   */
  export type flash_saleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many flash_sales.
     */
    data: flash_saleCreateManyInput | flash_saleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * flash_sale update
   */
  export type flash_saleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flash_sale
     */
    select?: flash_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flash_sale
     */
    omit?: flash_saleOmit<ExtArgs> | null
    /**
     * The data needed to update a flash_sale.
     */
    data: XOR<flash_saleUpdateInput, flash_saleUncheckedUpdateInput>
    /**
     * Choose, which flash_sale to update.
     */
    where: flash_saleWhereUniqueInput
  }

  /**
   * flash_sale updateMany
   */
  export type flash_saleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update flash_sales.
     */
    data: XOR<flash_saleUpdateManyMutationInput, flash_saleUncheckedUpdateManyInput>
    /**
     * Filter which flash_sales to update
     */
    where?: flash_saleWhereInput
    /**
     * Limit how many flash_sales to update.
     */
    limit?: number
  }

  /**
   * flash_sale upsert
   */
  export type flash_saleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flash_sale
     */
    select?: flash_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flash_sale
     */
    omit?: flash_saleOmit<ExtArgs> | null
    /**
     * The filter to search for the flash_sale to update in case it exists.
     */
    where: flash_saleWhereUniqueInput
    /**
     * In case the flash_sale found by the `where` argument doesn't exist, create a new flash_sale with this data.
     */
    create: XOR<flash_saleCreateInput, flash_saleUncheckedCreateInput>
    /**
     * In case the flash_sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<flash_saleUpdateInput, flash_saleUncheckedUpdateInput>
  }

  /**
   * flash_sale delete
   */
  export type flash_saleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flash_sale
     */
    select?: flash_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flash_sale
     */
    omit?: flash_saleOmit<ExtArgs> | null
    /**
     * Filter which flash_sale to delete.
     */
    where: flash_saleWhereUniqueInput
  }

  /**
   * flash_sale deleteMany
   */
  export type flash_saleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which flash_sales to delete
     */
    where?: flash_saleWhereInput
    /**
     * Limit how many flash_sales to delete.
     */
    limit?: number
  }

  /**
   * flash_sale without action
   */
  export type flash_saleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the flash_sale
     */
    select?: flash_saleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the flash_sale
     */
    omit?: flash_saleOmit<ExtArgs> | null
  }


  /**
   * Model survei
   */

  export type AggregateSurvei = {
    _count: SurveiCountAggregateOutputType | null
    _avg: SurveiAvgAggregateOutputType | null
    _sum: SurveiSumAggregateOutputType | null
    _min: SurveiMinAggregateOutputType | null
    _max: SurveiMaxAggregateOutputType | null
  }

  export type SurveiAvgAggregateOutputType = {
    id: number | null
  }

  export type SurveiSumAggregateOutputType = {
    id: number | null
  }

  export type SurveiMinAggregateOutputType = {
    id: number | null
    keterangan: string | null
  }

  export type SurveiMaxAggregateOutputType = {
    id: number | null
    keterangan: string | null
  }

  export type SurveiCountAggregateOutputType = {
    id: number
    keterangan: number
    _all: number
  }


  export type SurveiAvgAggregateInputType = {
    id?: true
  }

  export type SurveiSumAggregateInputType = {
    id?: true
  }

  export type SurveiMinAggregateInputType = {
    id?: true
    keterangan?: true
  }

  export type SurveiMaxAggregateInputType = {
    id?: true
    keterangan?: true
  }

  export type SurveiCountAggregateInputType = {
    id?: true
    keterangan?: true
    _all?: true
  }

  export type SurveiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which survei to aggregate.
     */
    where?: surveiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surveis to fetch.
     */
    orderBy?: surveiOrderByWithRelationInput | surveiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: surveiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned surveis
    **/
    _count?: true | SurveiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SurveiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SurveiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SurveiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SurveiMaxAggregateInputType
  }

  export type GetSurveiAggregateType<T extends SurveiAggregateArgs> = {
        [P in keyof T & keyof AggregateSurvei]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSurvei[P]>
      : GetScalarType<T[P], AggregateSurvei[P]>
  }




  export type surveiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: surveiWhereInput
    orderBy?: surveiOrderByWithAggregationInput | surveiOrderByWithAggregationInput[]
    by: SurveiScalarFieldEnum[] | SurveiScalarFieldEnum
    having?: surveiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SurveiCountAggregateInputType | true
    _avg?: SurveiAvgAggregateInputType
    _sum?: SurveiSumAggregateInputType
    _min?: SurveiMinAggregateInputType
    _max?: SurveiMaxAggregateInputType
  }

  export type SurveiGroupByOutputType = {
    id: number
    keterangan: string
    _count: SurveiCountAggregateOutputType | null
    _avg: SurveiAvgAggregateOutputType | null
    _sum: SurveiSumAggregateOutputType | null
    _min: SurveiMinAggregateOutputType | null
    _max: SurveiMaxAggregateOutputType | null
  }

  type GetSurveiGroupByPayload<T extends surveiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SurveiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SurveiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SurveiGroupByOutputType[P]>
            : GetScalarType<T[P], SurveiGroupByOutputType[P]>
        }
      >
    >


  export type surveiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    keterangan?: boolean
  }, ExtArgs["result"]["survei"]>



  export type surveiSelectScalar = {
    id?: boolean
    keterangan?: boolean
  }

  export type surveiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "keterangan", ExtArgs["result"]["survei"]>

  export type $surveiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "survei"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      keterangan: string
    }, ExtArgs["result"]["survei"]>
    composites: {}
  }

  type surveiGetPayload<S extends boolean | null | undefined | surveiDefaultArgs> = $Result.GetResult<Prisma.$surveiPayload, S>

  type surveiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<surveiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SurveiCountAggregateInputType | true
    }

  export interface surveiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['survei'], meta: { name: 'survei' } }
    /**
     * Find zero or one Survei that matches the filter.
     * @param {surveiFindUniqueArgs} args - Arguments to find a Survei
     * @example
     * // Get one Survei
     * const survei = await prisma.survei.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends surveiFindUniqueArgs>(args: SelectSubset<T, surveiFindUniqueArgs<ExtArgs>>): Prisma__surveiClient<$Result.GetResult<Prisma.$surveiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Survei that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {surveiFindUniqueOrThrowArgs} args - Arguments to find a Survei
     * @example
     * // Get one Survei
     * const survei = await prisma.survei.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends surveiFindUniqueOrThrowArgs>(args: SelectSubset<T, surveiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__surveiClient<$Result.GetResult<Prisma.$surveiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Survei that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveiFindFirstArgs} args - Arguments to find a Survei
     * @example
     * // Get one Survei
     * const survei = await prisma.survei.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends surveiFindFirstArgs>(args?: SelectSubset<T, surveiFindFirstArgs<ExtArgs>>): Prisma__surveiClient<$Result.GetResult<Prisma.$surveiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Survei that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveiFindFirstOrThrowArgs} args - Arguments to find a Survei
     * @example
     * // Get one Survei
     * const survei = await prisma.survei.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends surveiFindFirstOrThrowArgs>(args?: SelectSubset<T, surveiFindFirstOrThrowArgs<ExtArgs>>): Prisma__surveiClient<$Result.GetResult<Prisma.$surveiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Surveis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Surveis
     * const surveis = await prisma.survei.findMany()
     * 
     * // Get first 10 Surveis
     * const surveis = await prisma.survei.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const surveiWithIdOnly = await prisma.survei.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends surveiFindManyArgs>(args?: SelectSubset<T, surveiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$surveiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Survei.
     * @param {surveiCreateArgs} args - Arguments to create a Survei.
     * @example
     * // Create one Survei
     * const Survei = await prisma.survei.create({
     *   data: {
     *     // ... data to create a Survei
     *   }
     * })
     * 
     */
    create<T extends surveiCreateArgs>(args: SelectSubset<T, surveiCreateArgs<ExtArgs>>): Prisma__surveiClient<$Result.GetResult<Prisma.$surveiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Surveis.
     * @param {surveiCreateManyArgs} args - Arguments to create many Surveis.
     * @example
     * // Create many Surveis
     * const survei = await prisma.survei.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends surveiCreateManyArgs>(args?: SelectSubset<T, surveiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Survei.
     * @param {surveiDeleteArgs} args - Arguments to delete one Survei.
     * @example
     * // Delete one Survei
     * const Survei = await prisma.survei.delete({
     *   where: {
     *     // ... filter to delete one Survei
     *   }
     * })
     * 
     */
    delete<T extends surveiDeleteArgs>(args: SelectSubset<T, surveiDeleteArgs<ExtArgs>>): Prisma__surveiClient<$Result.GetResult<Prisma.$surveiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Survei.
     * @param {surveiUpdateArgs} args - Arguments to update one Survei.
     * @example
     * // Update one Survei
     * const survei = await prisma.survei.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends surveiUpdateArgs>(args: SelectSubset<T, surveiUpdateArgs<ExtArgs>>): Prisma__surveiClient<$Result.GetResult<Prisma.$surveiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Surveis.
     * @param {surveiDeleteManyArgs} args - Arguments to filter Surveis to delete.
     * @example
     * // Delete a few Surveis
     * const { count } = await prisma.survei.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends surveiDeleteManyArgs>(args?: SelectSubset<T, surveiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Surveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Surveis
     * const survei = await prisma.survei.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends surveiUpdateManyArgs>(args: SelectSubset<T, surveiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Survei.
     * @param {surveiUpsertArgs} args - Arguments to update or create a Survei.
     * @example
     * // Update or create a Survei
     * const survei = await prisma.survei.upsert({
     *   create: {
     *     // ... data to create a Survei
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Survei we want to update
     *   }
     * })
     */
    upsert<T extends surveiUpsertArgs>(args: SelectSubset<T, surveiUpsertArgs<ExtArgs>>): Prisma__surveiClient<$Result.GetResult<Prisma.$surveiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Surveis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveiCountArgs} args - Arguments to filter Surveis to count.
     * @example
     * // Count the number of Surveis
     * const count = await prisma.survei.count({
     *   where: {
     *     // ... the filter for the Surveis we want to count
     *   }
     * })
    **/
    count<T extends surveiCountArgs>(
      args?: Subset<T, surveiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SurveiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Survei.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SurveiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SurveiAggregateArgs>(args: Subset<T, SurveiAggregateArgs>): Prisma.PrismaPromise<GetSurveiAggregateType<T>>

    /**
     * Group by Survei.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {surveiGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends surveiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: surveiGroupByArgs['orderBy'] }
        : { orderBy?: surveiGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, surveiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSurveiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the survei model
   */
  readonly fields: surveiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for survei.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__surveiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the survei model
   */
  interface surveiFieldRefs {
    readonly id: FieldRef<"survei", 'Int'>
    readonly keterangan: FieldRef<"survei", 'String'>
  }
    

  // Custom InputTypes
  /**
   * survei findUnique
   */
  export type surveiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survei
     */
    select?: surveiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the survei
     */
    omit?: surveiOmit<ExtArgs> | null
    /**
     * Filter, which survei to fetch.
     */
    where: surveiWhereUniqueInput
  }

  /**
   * survei findUniqueOrThrow
   */
  export type surveiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survei
     */
    select?: surveiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the survei
     */
    omit?: surveiOmit<ExtArgs> | null
    /**
     * Filter, which survei to fetch.
     */
    where: surveiWhereUniqueInput
  }

  /**
   * survei findFirst
   */
  export type surveiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survei
     */
    select?: surveiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the survei
     */
    omit?: surveiOmit<ExtArgs> | null
    /**
     * Filter, which survei to fetch.
     */
    where?: surveiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surveis to fetch.
     */
    orderBy?: surveiOrderByWithRelationInput | surveiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for surveis.
     */
    cursor?: surveiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of surveis.
     */
    distinct?: SurveiScalarFieldEnum | SurveiScalarFieldEnum[]
  }

  /**
   * survei findFirstOrThrow
   */
  export type surveiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survei
     */
    select?: surveiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the survei
     */
    omit?: surveiOmit<ExtArgs> | null
    /**
     * Filter, which survei to fetch.
     */
    where?: surveiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surveis to fetch.
     */
    orderBy?: surveiOrderByWithRelationInput | surveiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for surveis.
     */
    cursor?: surveiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surveis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of surveis.
     */
    distinct?: SurveiScalarFieldEnum | SurveiScalarFieldEnum[]
  }

  /**
   * survei findMany
   */
  export type surveiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survei
     */
    select?: surveiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the survei
     */
    omit?: surveiOmit<ExtArgs> | null
    /**
     * Filter, which surveis to fetch.
     */
    where?: surveiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of surveis to fetch.
     */
    orderBy?: surveiOrderByWithRelationInput | surveiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing surveis.
     */
    cursor?: surveiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` surveis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` surveis.
     */
    skip?: number
    distinct?: SurveiScalarFieldEnum | SurveiScalarFieldEnum[]
  }

  /**
   * survei create
   */
  export type surveiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survei
     */
    select?: surveiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the survei
     */
    omit?: surveiOmit<ExtArgs> | null
    /**
     * The data needed to create a survei.
     */
    data: XOR<surveiCreateInput, surveiUncheckedCreateInput>
  }

  /**
   * survei createMany
   */
  export type surveiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many surveis.
     */
    data: surveiCreateManyInput | surveiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * survei update
   */
  export type surveiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survei
     */
    select?: surveiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the survei
     */
    omit?: surveiOmit<ExtArgs> | null
    /**
     * The data needed to update a survei.
     */
    data: XOR<surveiUpdateInput, surveiUncheckedUpdateInput>
    /**
     * Choose, which survei to update.
     */
    where: surveiWhereUniqueInput
  }

  /**
   * survei updateMany
   */
  export type surveiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update surveis.
     */
    data: XOR<surveiUpdateManyMutationInput, surveiUncheckedUpdateManyInput>
    /**
     * Filter which surveis to update
     */
    where?: surveiWhereInput
    /**
     * Limit how many surveis to update.
     */
    limit?: number
  }

  /**
   * survei upsert
   */
  export type surveiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survei
     */
    select?: surveiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the survei
     */
    omit?: surveiOmit<ExtArgs> | null
    /**
     * The filter to search for the survei to update in case it exists.
     */
    where: surveiWhereUniqueInput
    /**
     * In case the survei found by the `where` argument doesn't exist, create a new survei with this data.
     */
    create: XOR<surveiCreateInput, surveiUncheckedCreateInput>
    /**
     * In case the survei was found with the provided `where` argument, update it with this data.
     */
    update: XOR<surveiUpdateInput, surveiUncheckedUpdateInput>
  }

  /**
   * survei delete
   */
  export type surveiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survei
     */
    select?: surveiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the survei
     */
    omit?: surveiOmit<ExtArgs> | null
    /**
     * Filter which survei to delete.
     */
    where: surveiWhereUniqueInput
  }

  /**
   * survei deleteMany
   */
  export type surveiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which surveis to delete
     */
    where?: surveiWhereInput
    /**
     * Limit how many surveis to delete.
     */
    limit?: number
  }

  /**
   * survei without action
   */
  export type surveiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the survei
     */
    select?: surveiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the survei
     */
    omit?: surveiOmit<ExtArgs> | null
  }


  /**
   * Model VwSearch
   */

  export type AggregateVwSearch = {
    _count: VwSearchCountAggregateOutputType | null
    _avg: VwSearchAvgAggregateOutputType | null
    _sum: VwSearchSumAggregateOutputType | null
    _min: VwSearchMinAggregateOutputType | null
    _max: VwSearchMaxAggregateOutputType | null
  }

  export type VwSearchAvgAggregateOutputType = {
    id: number | null
  }

  export type VwSearchSumAggregateOutputType = {
    id: number | null
  }

  export type VwSearchMinAggregateOutputType = {
    id: number | null
    search: string | null
  }

  export type VwSearchMaxAggregateOutputType = {
    id: number | null
    search: string | null
  }

  export type VwSearchCountAggregateOutputType = {
    id: number
    search: number
    _all: number
  }


  export type VwSearchAvgAggregateInputType = {
    id?: true
  }

  export type VwSearchSumAggregateInputType = {
    id?: true
  }

  export type VwSearchMinAggregateInputType = {
    id?: true
    search?: true
  }

  export type VwSearchMaxAggregateInputType = {
    id?: true
    search?: true
  }

  export type VwSearchCountAggregateInputType = {
    id?: true
    search?: true
    _all?: true
  }

  export type VwSearchAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VwSearch to aggregate.
     */
    where?: VwSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwSearches to fetch.
     */
    orderBy?: VwSearchOrderByWithRelationInput | VwSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VwSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VwSearches
    **/
    _count?: true | VwSearchCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VwSearchAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VwSearchSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VwSearchMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VwSearchMaxAggregateInputType
  }

  export type GetVwSearchAggregateType<T extends VwSearchAggregateArgs> = {
        [P in keyof T & keyof AggregateVwSearch]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVwSearch[P]>
      : GetScalarType<T[P], AggregateVwSearch[P]>
  }




  export type VwSearchGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VwSearchWhereInput
    orderBy?: VwSearchOrderByWithAggregationInput | VwSearchOrderByWithAggregationInput[]
    by: VwSearchScalarFieldEnum[] | VwSearchScalarFieldEnum
    having?: VwSearchScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VwSearchCountAggregateInputType | true
    _avg?: VwSearchAvgAggregateInputType
    _sum?: VwSearchSumAggregateInputType
    _min?: VwSearchMinAggregateInputType
    _max?: VwSearchMaxAggregateInputType
  }

  export type VwSearchGroupByOutputType = {
    id: number
    search: string
    _count: VwSearchCountAggregateOutputType | null
    _avg: VwSearchAvgAggregateOutputType | null
    _sum: VwSearchSumAggregateOutputType | null
    _min: VwSearchMinAggregateOutputType | null
    _max: VwSearchMaxAggregateOutputType | null
  }

  type GetVwSearchGroupByPayload<T extends VwSearchGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VwSearchGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VwSearchGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VwSearchGroupByOutputType[P]>
            : GetScalarType<T[P], VwSearchGroupByOutputType[P]>
        }
      >
    >


  export type VwSearchSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    search?: boolean
  }, ExtArgs["result"]["vwSearch"]>



  export type VwSearchSelectScalar = {
    id?: boolean
    search?: boolean
  }

  export type VwSearchOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "search", ExtArgs["result"]["vwSearch"]>

  export type $VwSearchPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VwSearch"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      search: string
    }, ExtArgs["result"]["vwSearch"]>
    composites: {}
  }

  type VwSearchGetPayload<S extends boolean | null | undefined | VwSearchDefaultArgs> = $Result.GetResult<Prisma.$VwSearchPayload, S>

  type VwSearchCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VwSearchFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VwSearchCountAggregateInputType | true
    }

  export interface VwSearchDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VwSearch'], meta: { name: 'VwSearch' } }
    /**
     * Find zero or one VwSearch that matches the filter.
     * @param {VwSearchFindUniqueArgs} args - Arguments to find a VwSearch
     * @example
     * // Get one VwSearch
     * const vwSearch = await prisma.vwSearch.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VwSearchFindUniqueArgs>(args: SelectSubset<T, VwSearchFindUniqueArgs<ExtArgs>>): Prisma__VwSearchClient<$Result.GetResult<Prisma.$VwSearchPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VwSearch that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VwSearchFindUniqueOrThrowArgs} args - Arguments to find a VwSearch
     * @example
     * // Get one VwSearch
     * const vwSearch = await prisma.vwSearch.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VwSearchFindUniqueOrThrowArgs>(args: SelectSubset<T, VwSearchFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VwSearchClient<$Result.GetResult<Prisma.$VwSearchPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwSearch that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwSearchFindFirstArgs} args - Arguments to find a VwSearch
     * @example
     * // Get one VwSearch
     * const vwSearch = await prisma.vwSearch.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VwSearchFindFirstArgs>(args?: SelectSubset<T, VwSearchFindFirstArgs<ExtArgs>>): Prisma__VwSearchClient<$Result.GetResult<Prisma.$VwSearchPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VwSearch that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwSearchFindFirstOrThrowArgs} args - Arguments to find a VwSearch
     * @example
     * // Get one VwSearch
     * const vwSearch = await prisma.vwSearch.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VwSearchFindFirstOrThrowArgs>(args?: SelectSubset<T, VwSearchFindFirstOrThrowArgs<ExtArgs>>): Prisma__VwSearchClient<$Result.GetResult<Prisma.$VwSearchPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VwSearches that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwSearchFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VwSearches
     * const vwSearches = await prisma.vwSearch.findMany()
     * 
     * // Get first 10 VwSearches
     * const vwSearches = await prisma.vwSearch.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const vwSearchWithIdOnly = await prisma.vwSearch.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VwSearchFindManyArgs>(args?: SelectSubset<T, VwSearchFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VwSearchPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VwSearch.
     * @param {VwSearchCreateArgs} args - Arguments to create a VwSearch.
     * @example
     * // Create one VwSearch
     * const VwSearch = await prisma.vwSearch.create({
     *   data: {
     *     // ... data to create a VwSearch
     *   }
     * })
     * 
     */
    create<T extends VwSearchCreateArgs>(args: SelectSubset<T, VwSearchCreateArgs<ExtArgs>>): Prisma__VwSearchClient<$Result.GetResult<Prisma.$VwSearchPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VwSearches.
     * @param {VwSearchCreateManyArgs} args - Arguments to create many VwSearches.
     * @example
     * // Create many VwSearches
     * const vwSearch = await prisma.vwSearch.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VwSearchCreateManyArgs>(args?: SelectSubset<T, VwSearchCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VwSearch.
     * @param {VwSearchDeleteArgs} args - Arguments to delete one VwSearch.
     * @example
     * // Delete one VwSearch
     * const VwSearch = await prisma.vwSearch.delete({
     *   where: {
     *     // ... filter to delete one VwSearch
     *   }
     * })
     * 
     */
    delete<T extends VwSearchDeleteArgs>(args: SelectSubset<T, VwSearchDeleteArgs<ExtArgs>>): Prisma__VwSearchClient<$Result.GetResult<Prisma.$VwSearchPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VwSearch.
     * @param {VwSearchUpdateArgs} args - Arguments to update one VwSearch.
     * @example
     * // Update one VwSearch
     * const vwSearch = await prisma.vwSearch.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VwSearchUpdateArgs>(args: SelectSubset<T, VwSearchUpdateArgs<ExtArgs>>): Prisma__VwSearchClient<$Result.GetResult<Prisma.$VwSearchPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VwSearches.
     * @param {VwSearchDeleteManyArgs} args - Arguments to filter VwSearches to delete.
     * @example
     * // Delete a few VwSearches
     * const { count } = await prisma.vwSearch.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VwSearchDeleteManyArgs>(args?: SelectSubset<T, VwSearchDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VwSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwSearchUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VwSearches
     * const vwSearch = await prisma.vwSearch.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VwSearchUpdateManyArgs>(args: SelectSubset<T, VwSearchUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VwSearch.
     * @param {VwSearchUpsertArgs} args - Arguments to update or create a VwSearch.
     * @example
     * // Update or create a VwSearch
     * const vwSearch = await prisma.vwSearch.upsert({
     *   create: {
     *     // ... data to create a VwSearch
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VwSearch we want to update
     *   }
     * })
     */
    upsert<T extends VwSearchUpsertArgs>(args: SelectSubset<T, VwSearchUpsertArgs<ExtArgs>>): Prisma__VwSearchClient<$Result.GetResult<Prisma.$VwSearchPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VwSearches.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwSearchCountArgs} args - Arguments to filter VwSearches to count.
     * @example
     * // Count the number of VwSearches
     * const count = await prisma.vwSearch.count({
     *   where: {
     *     // ... the filter for the VwSearches we want to count
     *   }
     * })
    **/
    count<T extends VwSearchCountArgs>(
      args?: Subset<T, VwSearchCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VwSearchCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VwSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwSearchAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VwSearchAggregateArgs>(args: Subset<T, VwSearchAggregateArgs>): Prisma.PrismaPromise<GetVwSearchAggregateType<T>>

    /**
     * Group by VwSearch.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VwSearchGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VwSearchGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VwSearchGroupByArgs['orderBy'] }
        : { orderBy?: VwSearchGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VwSearchGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVwSearchGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VwSearch model
   */
  readonly fields: VwSearchFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VwSearch.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VwSearchClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VwSearch model
   */
  interface VwSearchFieldRefs {
    readonly id: FieldRef<"VwSearch", 'Int'>
    readonly search: FieldRef<"VwSearch", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VwSearch findUnique
   */
  export type VwSearchFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwSearch
     */
    select?: VwSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VwSearch
     */
    omit?: VwSearchOmit<ExtArgs> | null
    /**
     * Filter, which VwSearch to fetch.
     */
    where: VwSearchWhereUniqueInput
  }

  /**
   * VwSearch findUniqueOrThrow
   */
  export type VwSearchFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwSearch
     */
    select?: VwSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VwSearch
     */
    omit?: VwSearchOmit<ExtArgs> | null
    /**
     * Filter, which VwSearch to fetch.
     */
    where: VwSearchWhereUniqueInput
  }

  /**
   * VwSearch findFirst
   */
  export type VwSearchFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwSearch
     */
    select?: VwSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VwSearch
     */
    omit?: VwSearchOmit<ExtArgs> | null
    /**
     * Filter, which VwSearch to fetch.
     */
    where?: VwSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwSearches to fetch.
     */
    orderBy?: VwSearchOrderByWithRelationInput | VwSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VwSearches.
     */
    cursor?: VwSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VwSearches.
     */
    distinct?: VwSearchScalarFieldEnum | VwSearchScalarFieldEnum[]
  }

  /**
   * VwSearch findFirstOrThrow
   */
  export type VwSearchFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwSearch
     */
    select?: VwSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VwSearch
     */
    omit?: VwSearchOmit<ExtArgs> | null
    /**
     * Filter, which VwSearch to fetch.
     */
    where?: VwSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwSearches to fetch.
     */
    orderBy?: VwSearchOrderByWithRelationInput | VwSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VwSearches.
     */
    cursor?: VwSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwSearches.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VwSearches.
     */
    distinct?: VwSearchScalarFieldEnum | VwSearchScalarFieldEnum[]
  }

  /**
   * VwSearch findMany
   */
  export type VwSearchFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwSearch
     */
    select?: VwSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VwSearch
     */
    omit?: VwSearchOmit<ExtArgs> | null
    /**
     * Filter, which VwSearches to fetch.
     */
    where?: VwSearchWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VwSearches to fetch.
     */
    orderBy?: VwSearchOrderByWithRelationInput | VwSearchOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VwSearches.
     */
    cursor?: VwSearchWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VwSearches from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VwSearches.
     */
    skip?: number
    distinct?: VwSearchScalarFieldEnum | VwSearchScalarFieldEnum[]
  }

  /**
   * VwSearch create
   */
  export type VwSearchCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwSearch
     */
    select?: VwSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VwSearch
     */
    omit?: VwSearchOmit<ExtArgs> | null
    /**
     * The data needed to create a VwSearch.
     */
    data: XOR<VwSearchCreateInput, VwSearchUncheckedCreateInput>
  }

  /**
   * VwSearch createMany
   */
  export type VwSearchCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VwSearches.
     */
    data: VwSearchCreateManyInput | VwSearchCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VwSearch update
   */
  export type VwSearchUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwSearch
     */
    select?: VwSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VwSearch
     */
    omit?: VwSearchOmit<ExtArgs> | null
    /**
     * The data needed to update a VwSearch.
     */
    data: XOR<VwSearchUpdateInput, VwSearchUncheckedUpdateInput>
    /**
     * Choose, which VwSearch to update.
     */
    where: VwSearchWhereUniqueInput
  }

  /**
   * VwSearch updateMany
   */
  export type VwSearchUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VwSearches.
     */
    data: XOR<VwSearchUpdateManyMutationInput, VwSearchUncheckedUpdateManyInput>
    /**
     * Filter which VwSearches to update
     */
    where?: VwSearchWhereInput
    /**
     * Limit how many VwSearches to update.
     */
    limit?: number
  }

  /**
   * VwSearch upsert
   */
  export type VwSearchUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwSearch
     */
    select?: VwSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VwSearch
     */
    omit?: VwSearchOmit<ExtArgs> | null
    /**
     * The filter to search for the VwSearch to update in case it exists.
     */
    where: VwSearchWhereUniqueInput
    /**
     * In case the VwSearch found by the `where` argument doesn't exist, create a new VwSearch with this data.
     */
    create: XOR<VwSearchCreateInput, VwSearchUncheckedCreateInput>
    /**
     * In case the VwSearch was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VwSearchUpdateInput, VwSearchUncheckedUpdateInput>
  }

  /**
   * VwSearch delete
   */
  export type VwSearchDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwSearch
     */
    select?: VwSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VwSearch
     */
    omit?: VwSearchOmit<ExtArgs> | null
    /**
     * Filter which VwSearch to delete.
     */
    where: VwSearchWhereUniqueInput
  }

  /**
   * VwSearch deleteMany
   */
  export type VwSearchDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VwSearches to delete
     */
    where?: VwSearchWhereInput
    /**
     * Limit how many VwSearches to delete.
     */
    limit?: number
  }

  /**
   * VwSearch without action
   */
  export type VwSearchDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VwSearch
     */
    select?: VwSearchSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VwSearch
     */
    omit?: VwSearchOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const HeroScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    id_produkimg: 'id_produkimg'
  };

  export type HeroScalarFieldEnum = (typeof HeroScalarFieldEnum)[keyof typeof HeroScalarFieldEnum]


  export const ProdukScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    harga_rupiah: 'harga_rupiah',
    harga_ringgit: 'harga_ringgit',
    harga_dolar: 'harga_dolar',
    deskripsi: 'deskripsi',
    rank: 'rank',
    author_id: 'author_id',
    status: 'status',
    diskon: 'diskon',
    highlight: 'highlight',
    email_akun: 'email_akun',
    password_akun: 'password_akun',
    buyer_email: 'buyer_email',
    buyer_lang: 'buyer_lang',
    merchant_order_id: 'merchant_order_id'
  };

  export type ProdukScalarFieldEnum = (typeof ProdukScalarFieldEnum)[keyof typeof ProdukScalarFieldEnum]


  export const ProdukimgScalarFieldEnum: {
    id: 'id',
    link: 'link',
    id_produk: 'id_produk',
    urutan: 'urutan'
  };

  export type ProdukimgScalarFieldEnum = (typeof ProdukimgScalarFieldEnum)[keyof typeof ProdukimgScalarFieldEnum]


  export const SkinScalarFieldEnum: {
    id: 'id',
    nama: 'nama',
    alias_skin: 'alias_skin',
    id_hero: 'id_hero'
  };

  export type SkinScalarFieldEnum = (typeof SkinScalarFieldEnum)[keyof typeof SkinScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const BannerScalarFieldEnum: {
    id: 'id',
    url: 'url',
    highlight: 'highlight'
  };

  export type BannerScalarFieldEnum = (typeof BannerScalarFieldEnum)[keyof typeof BannerScalarFieldEnum]


  export const PengumumanScalarFieldEnum: {
    id: 'id',
    pengumuman: 'pengumuman',
    icon: 'icon',
    icon_position: 'icon_position',
    highlight: 'highlight'
  };

  export type PengumumanScalarFieldEnum = (typeof PengumumanScalarFieldEnum)[keyof typeof PengumumanScalarFieldEnum]


  export const Kode_promoScalarFieldEnum: {
    id: 'id',
    kode: 'kode',
    diskon: 'diskon',
    start_date: 'start_date',
    end_date: 'end_date',
    max_claims: 'max_claims',
    current_claims: 'current_claims',
    min_purchase: 'min_purchase',
    max_discount: 'max_discount',
    active: 'active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Kode_promoScalarFieldEnum = (typeof Kode_promoScalarFieldEnum)[keyof typeof Kode_promoScalarFieldEnum]


  export const Flash_saleScalarFieldEnum: {
    id: 'id',
    diskon: 'diskon',
    start_date: 'start_date',
    end_date: 'end_date'
  };

  export type Flash_saleScalarFieldEnum = (typeof Flash_saleScalarFieldEnum)[keyof typeof Flash_saleScalarFieldEnum]


  export const SurveiScalarFieldEnum: {
    id: 'id',
    keterangan: 'keterangan'
  };

  export type SurveiScalarFieldEnum = (typeof SurveiScalarFieldEnum)[keyof typeof SurveiScalarFieldEnum]


  export const VwSearchScalarFieldEnum: {
    id: 'id',
    search: 'search'
  };

  export type VwSearchScalarFieldEnum = (typeof VwSearchScalarFieldEnum)[keyof typeof VwSearchScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const heroOrderByRelevanceFieldEnum: {
    nama: 'nama'
  };

  export type heroOrderByRelevanceFieldEnum = (typeof heroOrderByRelevanceFieldEnum)[keyof typeof heroOrderByRelevanceFieldEnum]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const produkOrderByRelevanceFieldEnum: {
    nama: 'nama',
    deskripsi: 'deskripsi',
    rank: 'rank',
    email_akun: 'email_akun',
    password_akun: 'password_akun',
    buyer_email: 'buyer_email',
    buyer_lang: 'buyer_lang',
    merchant_order_id: 'merchant_order_id'
  };

  export type produkOrderByRelevanceFieldEnum = (typeof produkOrderByRelevanceFieldEnum)[keyof typeof produkOrderByRelevanceFieldEnum]


  export const produkimgOrderByRelevanceFieldEnum: {
    link: 'link'
  };

  export type produkimgOrderByRelevanceFieldEnum = (typeof produkimgOrderByRelevanceFieldEnum)[keyof typeof produkimgOrderByRelevanceFieldEnum]


  export const skinOrderByRelevanceFieldEnum: {
    nama: 'nama',
    alias_skin: 'alias_skin'
  };

  export type skinOrderByRelevanceFieldEnum = (typeof skinOrderByRelevanceFieldEnum)[keyof typeof skinOrderByRelevanceFieldEnum]


  export const usersOrderByRelevanceFieldEnum: {
    username: 'username',
    password: 'password'
  };

  export type usersOrderByRelevanceFieldEnum = (typeof usersOrderByRelevanceFieldEnum)[keyof typeof usersOrderByRelevanceFieldEnum]


  export const bannerOrderByRelevanceFieldEnum: {
    url: 'url'
  };

  export type bannerOrderByRelevanceFieldEnum = (typeof bannerOrderByRelevanceFieldEnum)[keyof typeof bannerOrderByRelevanceFieldEnum]


  export const pengumumanOrderByRelevanceFieldEnum: {
    pengumuman: 'pengumuman',
    icon: 'icon',
    icon_position: 'icon_position'
  };

  export type pengumumanOrderByRelevanceFieldEnum = (typeof pengumumanOrderByRelevanceFieldEnum)[keyof typeof pengumumanOrderByRelevanceFieldEnum]


  export const kode_promoOrderByRelevanceFieldEnum: {
    kode: 'kode'
  };

  export type kode_promoOrderByRelevanceFieldEnum = (typeof kode_promoOrderByRelevanceFieldEnum)[keyof typeof kode_promoOrderByRelevanceFieldEnum]


  export const surveiOrderByRelevanceFieldEnum: {
    keterangan: 'keterangan'
  };

  export type surveiOrderByRelevanceFieldEnum = (typeof surveiOrderByRelevanceFieldEnum)[keyof typeof surveiOrderByRelevanceFieldEnum]


  export const VwSearchOrderByRelevanceFieldEnum: {
    search: 'search'
  };

  export type VwSearchOrderByRelevanceFieldEnum = (typeof VwSearchOrderByRelevanceFieldEnum)[keyof typeof VwSearchOrderByRelevanceFieldEnum]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    
  /**
   * Deep Input Types
   */


  export type heroWhereInput = {
    AND?: heroWhereInput | heroWhereInput[]
    OR?: heroWhereInput[]
    NOT?: heroWhereInput | heroWhereInput[]
    id?: IntFilter<"hero"> | number
    nama?: StringFilter<"hero"> | string
    id_produkimg?: IntFilter<"hero"> | number
    produkimg?: XOR<ProdukimgScalarRelationFilter, produkimgWhereInput>
    skin?: XOR<SkinNullableScalarRelationFilter, skinWhereInput> | null
  }

  export type heroOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    id_produkimg?: SortOrder
    produkimg?: produkimgOrderByWithRelationInput
    skin?: skinOrderByWithRelationInput
    _relevance?: heroOrderByRelevanceInput
  }

  export type heroWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: heroWhereInput | heroWhereInput[]
    OR?: heroWhereInput[]
    NOT?: heroWhereInput | heroWhereInput[]
    nama?: StringFilter<"hero"> | string
    id_produkimg?: IntFilter<"hero"> | number
    produkimg?: XOR<ProdukimgScalarRelationFilter, produkimgWhereInput>
    skin?: XOR<SkinNullableScalarRelationFilter, skinWhereInput> | null
  }, "id">

  export type heroOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    id_produkimg?: SortOrder
    _count?: heroCountOrderByAggregateInput
    _avg?: heroAvgOrderByAggregateInput
    _max?: heroMaxOrderByAggregateInput
    _min?: heroMinOrderByAggregateInput
    _sum?: heroSumOrderByAggregateInput
  }

  export type heroScalarWhereWithAggregatesInput = {
    AND?: heroScalarWhereWithAggregatesInput | heroScalarWhereWithAggregatesInput[]
    OR?: heroScalarWhereWithAggregatesInput[]
    NOT?: heroScalarWhereWithAggregatesInput | heroScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"hero"> | number
    nama?: StringWithAggregatesFilter<"hero"> | string
    id_produkimg?: IntWithAggregatesFilter<"hero"> | number
  }

  export type produkWhereInput = {
    AND?: produkWhereInput | produkWhereInput[]
    OR?: produkWhereInput[]
    NOT?: produkWhereInput | produkWhereInput[]
    id?: IntFilter<"produk"> | number
    nama?: StringFilter<"produk"> | string
    harga_rupiah?: IntFilter<"produk"> | number
    harga_ringgit?: IntNullableFilter<"produk"> | number | null
    harga_dolar?: IntNullableFilter<"produk"> | number | null
    deskripsi?: StringNullableFilter<"produk"> | string | null
    rank?: StringFilter<"produk"> | string
    author_id?: IntNullableFilter<"produk"> | number | null
    status?: BoolFilter<"produk"> | boolean
    diskon?: FloatNullableFilter<"produk"> | number | null
    highlight?: BoolNullableFilter<"produk"> | boolean | null
    email_akun?: StringNullableFilter<"produk"> | string | null
    password_akun?: StringNullableFilter<"produk"> | string | null
    buyer_email?: StringNullableFilter<"produk"> | string | null
    buyer_lang?: StringNullableFilter<"produk"> | string | null
    merchant_order_id?: StringNullableFilter<"produk"> | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    produkimg?: ProdukimgListRelationFilter
  }

  export type produkOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    harga_rupiah?: SortOrder
    harga_ringgit?: SortOrderInput | SortOrder
    harga_dolar?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    rank?: SortOrder
    author_id?: SortOrderInput | SortOrder
    status?: SortOrder
    diskon?: SortOrderInput | SortOrder
    highlight?: SortOrderInput | SortOrder
    email_akun?: SortOrderInput | SortOrder
    password_akun?: SortOrderInput | SortOrder
    buyer_email?: SortOrderInput | SortOrder
    buyer_lang?: SortOrderInput | SortOrder
    merchant_order_id?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    produkimg?: produkimgOrderByRelationAggregateInput
    _relevance?: produkOrderByRelevanceInput
  }

  export type produkWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    nama?: string
    merchant_order_id?: string
    AND?: produkWhereInput | produkWhereInput[]
    OR?: produkWhereInput[]
    NOT?: produkWhereInput | produkWhereInput[]
    harga_rupiah?: IntFilter<"produk"> | number
    harga_ringgit?: IntNullableFilter<"produk"> | number | null
    harga_dolar?: IntNullableFilter<"produk"> | number | null
    deskripsi?: StringNullableFilter<"produk"> | string | null
    rank?: StringFilter<"produk"> | string
    author_id?: IntNullableFilter<"produk"> | number | null
    status?: BoolFilter<"produk"> | boolean
    diskon?: FloatNullableFilter<"produk"> | number | null
    highlight?: BoolNullableFilter<"produk"> | boolean | null
    email_akun?: StringNullableFilter<"produk"> | string | null
    password_akun?: StringNullableFilter<"produk"> | string | null
    buyer_email?: StringNullableFilter<"produk"> | string | null
    buyer_lang?: StringNullableFilter<"produk"> | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    produkimg?: ProdukimgListRelationFilter
  }, "id" | "nama" | "merchant_order_id">

  export type produkOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    harga_rupiah?: SortOrder
    harga_ringgit?: SortOrderInput | SortOrder
    harga_dolar?: SortOrderInput | SortOrder
    deskripsi?: SortOrderInput | SortOrder
    rank?: SortOrder
    author_id?: SortOrderInput | SortOrder
    status?: SortOrder
    diskon?: SortOrderInput | SortOrder
    highlight?: SortOrderInput | SortOrder
    email_akun?: SortOrderInput | SortOrder
    password_akun?: SortOrderInput | SortOrder
    buyer_email?: SortOrderInput | SortOrder
    buyer_lang?: SortOrderInput | SortOrder
    merchant_order_id?: SortOrderInput | SortOrder
    _count?: produkCountOrderByAggregateInput
    _avg?: produkAvgOrderByAggregateInput
    _max?: produkMaxOrderByAggregateInput
    _min?: produkMinOrderByAggregateInput
    _sum?: produkSumOrderByAggregateInput
  }

  export type produkScalarWhereWithAggregatesInput = {
    AND?: produkScalarWhereWithAggregatesInput | produkScalarWhereWithAggregatesInput[]
    OR?: produkScalarWhereWithAggregatesInput[]
    NOT?: produkScalarWhereWithAggregatesInput | produkScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"produk"> | number
    nama?: StringWithAggregatesFilter<"produk"> | string
    harga_rupiah?: IntWithAggregatesFilter<"produk"> | number
    harga_ringgit?: IntNullableWithAggregatesFilter<"produk"> | number | null
    harga_dolar?: IntNullableWithAggregatesFilter<"produk"> | number | null
    deskripsi?: StringNullableWithAggregatesFilter<"produk"> | string | null
    rank?: StringWithAggregatesFilter<"produk"> | string
    author_id?: IntNullableWithAggregatesFilter<"produk"> | number | null
    status?: BoolWithAggregatesFilter<"produk"> | boolean
    diskon?: FloatNullableWithAggregatesFilter<"produk"> | number | null
    highlight?: BoolNullableWithAggregatesFilter<"produk"> | boolean | null
    email_akun?: StringNullableWithAggregatesFilter<"produk"> | string | null
    password_akun?: StringNullableWithAggregatesFilter<"produk"> | string | null
    buyer_email?: StringNullableWithAggregatesFilter<"produk"> | string | null
    buyer_lang?: StringNullableWithAggregatesFilter<"produk"> | string | null
    merchant_order_id?: StringNullableWithAggregatesFilter<"produk"> | string | null
  }

  export type produkimgWhereInput = {
    AND?: produkimgWhereInput | produkimgWhereInput[]
    OR?: produkimgWhereInput[]
    NOT?: produkimgWhereInput | produkimgWhereInput[]
    id?: IntFilter<"produkimg"> | number
    link?: StringFilter<"produkimg"> | string
    id_produk?: IntFilter<"produkimg"> | number
    urutan?: IntFilter<"produkimg"> | number
    hero?: HeroListRelationFilter
    produk?: XOR<ProdukScalarRelationFilter, produkWhereInput>
  }

  export type produkimgOrderByWithRelationInput = {
    id?: SortOrder
    link?: SortOrder
    id_produk?: SortOrder
    urutan?: SortOrder
    hero?: heroOrderByRelationAggregateInput
    produk?: produkOrderByWithRelationInput
    _relevance?: produkimgOrderByRelevanceInput
  }

  export type produkimgWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: produkimgWhereInput | produkimgWhereInput[]
    OR?: produkimgWhereInput[]
    NOT?: produkimgWhereInput | produkimgWhereInput[]
    link?: StringFilter<"produkimg"> | string
    id_produk?: IntFilter<"produkimg"> | number
    urutan?: IntFilter<"produkimg"> | number
    hero?: HeroListRelationFilter
    produk?: XOR<ProdukScalarRelationFilter, produkWhereInput>
  }, "id">

  export type produkimgOrderByWithAggregationInput = {
    id?: SortOrder
    link?: SortOrder
    id_produk?: SortOrder
    urutan?: SortOrder
    _count?: produkimgCountOrderByAggregateInput
    _avg?: produkimgAvgOrderByAggregateInput
    _max?: produkimgMaxOrderByAggregateInput
    _min?: produkimgMinOrderByAggregateInput
    _sum?: produkimgSumOrderByAggregateInput
  }

  export type produkimgScalarWhereWithAggregatesInput = {
    AND?: produkimgScalarWhereWithAggregatesInput | produkimgScalarWhereWithAggregatesInput[]
    OR?: produkimgScalarWhereWithAggregatesInput[]
    NOT?: produkimgScalarWhereWithAggregatesInput | produkimgScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"produkimg"> | number
    link?: StringWithAggregatesFilter<"produkimg"> | string
    id_produk?: IntWithAggregatesFilter<"produkimg"> | number
    urutan?: IntWithAggregatesFilter<"produkimg"> | number
  }

  export type skinWhereInput = {
    AND?: skinWhereInput | skinWhereInput[]
    OR?: skinWhereInput[]
    NOT?: skinWhereInput | skinWhereInput[]
    id?: IntFilter<"skin"> | number
    nama?: StringFilter<"skin"> | string
    alias_skin?: StringNullableFilter<"skin"> | string | null
    id_hero?: IntFilter<"skin"> | number
    hero?: XOR<HeroScalarRelationFilter, heroWhereInput>
  }

  export type skinOrderByWithRelationInput = {
    id?: SortOrder
    nama?: SortOrder
    alias_skin?: SortOrderInput | SortOrder
    id_hero?: SortOrder
    hero?: heroOrderByWithRelationInput
    _relevance?: skinOrderByRelevanceInput
  }

  export type skinWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    id_hero?: number
    AND?: skinWhereInput | skinWhereInput[]
    OR?: skinWhereInput[]
    NOT?: skinWhereInput | skinWhereInput[]
    nama?: StringFilter<"skin"> | string
    alias_skin?: StringNullableFilter<"skin"> | string | null
    hero?: XOR<HeroScalarRelationFilter, heroWhereInput>
  }, "id" | "id_hero">

  export type skinOrderByWithAggregationInput = {
    id?: SortOrder
    nama?: SortOrder
    alias_skin?: SortOrderInput | SortOrder
    id_hero?: SortOrder
    _count?: skinCountOrderByAggregateInput
    _avg?: skinAvgOrderByAggregateInput
    _max?: skinMaxOrderByAggregateInput
    _min?: skinMinOrderByAggregateInput
    _sum?: skinSumOrderByAggregateInput
  }

  export type skinScalarWhereWithAggregatesInput = {
    AND?: skinScalarWhereWithAggregatesInput | skinScalarWhereWithAggregatesInput[]
    OR?: skinScalarWhereWithAggregatesInput[]
    NOT?: skinScalarWhereWithAggregatesInput | skinScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"skin"> | number
    nama?: StringWithAggregatesFilter<"skin"> | string
    alias_skin?: StringNullableWithAggregatesFilter<"skin"> | string | null
    id_hero?: IntWithAggregatesFilter<"skin"> | number
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    username?: StringFilter<"users"> | string
    password?: StringFilter<"users"> | string
    produk?: ProdukListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    produk?: produkOrderByRelationAggregateInput
    _relevance?: usersOrderByRelevanceInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password?: StringFilter<"users"> | string
    produk?: ProdukListRelationFilter
  }, "id" | "username">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    username?: StringWithAggregatesFilter<"users"> | string
    password?: StringWithAggregatesFilter<"users"> | string
  }

  export type bannerWhereInput = {
    AND?: bannerWhereInput | bannerWhereInput[]
    OR?: bannerWhereInput[]
    NOT?: bannerWhereInput | bannerWhereInput[]
    id?: IntFilter<"banner"> | number
    url?: StringFilter<"banner"> | string
    highlight?: BoolFilter<"banner"> | boolean
  }

  export type bannerOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    highlight?: SortOrder
    _relevance?: bannerOrderByRelevanceInput
  }

  export type bannerWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: bannerWhereInput | bannerWhereInput[]
    OR?: bannerWhereInput[]
    NOT?: bannerWhereInput | bannerWhereInput[]
    url?: StringFilter<"banner"> | string
    highlight?: BoolFilter<"banner"> | boolean
  }, "id">

  export type bannerOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    highlight?: SortOrder
    _count?: bannerCountOrderByAggregateInput
    _avg?: bannerAvgOrderByAggregateInput
    _max?: bannerMaxOrderByAggregateInput
    _min?: bannerMinOrderByAggregateInput
    _sum?: bannerSumOrderByAggregateInput
  }

  export type bannerScalarWhereWithAggregatesInput = {
    AND?: bannerScalarWhereWithAggregatesInput | bannerScalarWhereWithAggregatesInput[]
    OR?: bannerScalarWhereWithAggregatesInput[]
    NOT?: bannerScalarWhereWithAggregatesInput | bannerScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"banner"> | number
    url?: StringWithAggregatesFilter<"banner"> | string
    highlight?: BoolWithAggregatesFilter<"banner"> | boolean
  }

  export type pengumumanWhereInput = {
    AND?: pengumumanWhereInput | pengumumanWhereInput[]
    OR?: pengumumanWhereInput[]
    NOT?: pengumumanWhereInput | pengumumanWhereInput[]
    id?: IntFilter<"pengumuman"> | number
    pengumuman?: StringFilter<"pengumuman"> | string
    icon?: StringNullableFilter<"pengumuman"> | string | null
    icon_position?: StringNullableFilter<"pengumuman"> | string | null
    highlight?: BoolFilter<"pengumuman"> | boolean
  }

  export type pengumumanOrderByWithRelationInput = {
    id?: SortOrder
    pengumuman?: SortOrder
    icon?: SortOrderInput | SortOrder
    icon_position?: SortOrderInput | SortOrder
    highlight?: SortOrder
    _relevance?: pengumumanOrderByRelevanceInput
  }

  export type pengumumanWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: pengumumanWhereInput | pengumumanWhereInput[]
    OR?: pengumumanWhereInput[]
    NOT?: pengumumanWhereInput | pengumumanWhereInput[]
    pengumuman?: StringFilter<"pengumuman"> | string
    icon?: StringNullableFilter<"pengumuman"> | string | null
    icon_position?: StringNullableFilter<"pengumuman"> | string | null
    highlight?: BoolFilter<"pengumuman"> | boolean
  }, "id">

  export type pengumumanOrderByWithAggregationInput = {
    id?: SortOrder
    pengumuman?: SortOrder
    icon?: SortOrderInput | SortOrder
    icon_position?: SortOrderInput | SortOrder
    highlight?: SortOrder
    _count?: pengumumanCountOrderByAggregateInput
    _avg?: pengumumanAvgOrderByAggregateInput
    _max?: pengumumanMaxOrderByAggregateInput
    _min?: pengumumanMinOrderByAggregateInput
    _sum?: pengumumanSumOrderByAggregateInput
  }

  export type pengumumanScalarWhereWithAggregatesInput = {
    AND?: pengumumanScalarWhereWithAggregatesInput | pengumumanScalarWhereWithAggregatesInput[]
    OR?: pengumumanScalarWhereWithAggregatesInput[]
    NOT?: pengumumanScalarWhereWithAggregatesInput | pengumumanScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"pengumuman"> | number
    pengumuman?: StringWithAggregatesFilter<"pengumuman"> | string
    icon?: StringNullableWithAggregatesFilter<"pengumuman"> | string | null
    icon_position?: StringNullableWithAggregatesFilter<"pengumuman"> | string | null
    highlight?: BoolWithAggregatesFilter<"pengumuman"> | boolean
  }

  export type kode_promoWhereInput = {
    AND?: kode_promoWhereInput | kode_promoWhereInput[]
    OR?: kode_promoWhereInput[]
    NOT?: kode_promoWhereInput | kode_promoWhereInput[]
    id?: IntFilter<"kode_promo"> | number
    kode?: StringFilter<"kode_promo"> | string
    diskon?: FloatFilter<"kode_promo"> | number
    start_date?: DateTimeNullableFilter<"kode_promo"> | Date | string | null
    end_date?: DateTimeNullableFilter<"kode_promo"> | Date | string | null
    max_claims?: IntNullableFilter<"kode_promo"> | number | null
    current_claims?: IntFilter<"kode_promo"> | number
    min_purchase?: FloatNullableFilter<"kode_promo"> | number | null
    max_discount?: FloatNullableFilter<"kode_promo"> | number | null
    active?: BoolFilter<"kode_promo"> | boolean
    created_at?: DateTimeFilter<"kode_promo"> | Date | string
    updated_at?: DateTimeFilter<"kode_promo"> | Date | string
  }

  export type kode_promoOrderByWithRelationInput = {
    id?: SortOrder
    kode?: SortOrder
    diskon?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    max_claims?: SortOrderInput | SortOrder
    current_claims?: SortOrder
    min_purchase?: SortOrderInput | SortOrder
    max_discount?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _relevance?: kode_promoOrderByRelevanceInput
  }

  export type kode_promoWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    kode?: string
    AND?: kode_promoWhereInput | kode_promoWhereInput[]
    OR?: kode_promoWhereInput[]
    NOT?: kode_promoWhereInput | kode_promoWhereInput[]
    diskon?: FloatFilter<"kode_promo"> | number
    start_date?: DateTimeNullableFilter<"kode_promo"> | Date | string | null
    end_date?: DateTimeNullableFilter<"kode_promo"> | Date | string | null
    max_claims?: IntNullableFilter<"kode_promo"> | number | null
    current_claims?: IntFilter<"kode_promo"> | number
    min_purchase?: FloatNullableFilter<"kode_promo"> | number | null
    max_discount?: FloatNullableFilter<"kode_promo"> | number | null
    active?: BoolFilter<"kode_promo"> | boolean
    created_at?: DateTimeFilter<"kode_promo"> | Date | string
    updated_at?: DateTimeFilter<"kode_promo"> | Date | string
  }, "id" | "kode">

  export type kode_promoOrderByWithAggregationInput = {
    id?: SortOrder
    kode?: SortOrder
    diskon?: SortOrder
    start_date?: SortOrderInput | SortOrder
    end_date?: SortOrderInput | SortOrder
    max_claims?: SortOrderInput | SortOrder
    current_claims?: SortOrder
    min_purchase?: SortOrderInput | SortOrder
    max_discount?: SortOrderInput | SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    _count?: kode_promoCountOrderByAggregateInput
    _avg?: kode_promoAvgOrderByAggregateInput
    _max?: kode_promoMaxOrderByAggregateInput
    _min?: kode_promoMinOrderByAggregateInput
    _sum?: kode_promoSumOrderByAggregateInput
  }

  export type kode_promoScalarWhereWithAggregatesInput = {
    AND?: kode_promoScalarWhereWithAggregatesInput | kode_promoScalarWhereWithAggregatesInput[]
    OR?: kode_promoScalarWhereWithAggregatesInput[]
    NOT?: kode_promoScalarWhereWithAggregatesInput | kode_promoScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"kode_promo"> | number
    kode?: StringWithAggregatesFilter<"kode_promo"> | string
    diskon?: FloatWithAggregatesFilter<"kode_promo"> | number
    start_date?: DateTimeNullableWithAggregatesFilter<"kode_promo"> | Date | string | null
    end_date?: DateTimeNullableWithAggregatesFilter<"kode_promo"> | Date | string | null
    max_claims?: IntNullableWithAggregatesFilter<"kode_promo"> | number | null
    current_claims?: IntWithAggregatesFilter<"kode_promo"> | number
    min_purchase?: FloatNullableWithAggregatesFilter<"kode_promo"> | number | null
    max_discount?: FloatNullableWithAggregatesFilter<"kode_promo"> | number | null
    active?: BoolWithAggregatesFilter<"kode_promo"> | boolean
    created_at?: DateTimeWithAggregatesFilter<"kode_promo"> | Date | string
    updated_at?: DateTimeWithAggregatesFilter<"kode_promo"> | Date | string
  }

  export type flash_saleWhereInput = {
    AND?: flash_saleWhereInput | flash_saleWhereInput[]
    OR?: flash_saleWhereInput[]
    NOT?: flash_saleWhereInput | flash_saleWhereInput[]
    id?: IntFilter<"flash_sale"> | number
    diskon?: IntFilter<"flash_sale"> | number
    start_date?: DateTimeFilter<"flash_sale"> | Date | string
    end_date?: DateTimeFilter<"flash_sale"> | Date | string
  }

  export type flash_saleOrderByWithRelationInput = {
    id?: SortOrder
    diskon?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type flash_saleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: flash_saleWhereInput | flash_saleWhereInput[]
    OR?: flash_saleWhereInput[]
    NOT?: flash_saleWhereInput | flash_saleWhereInput[]
    diskon?: IntFilter<"flash_sale"> | number
    start_date?: DateTimeFilter<"flash_sale"> | Date | string
    end_date?: DateTimeFilter<"flash_sale"> | Date | string
  }, "id">

  export type flash_saleOrderByWithAggregationInput = {
    id?: SortOrder
    diskon?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    _count?: flash_saleCountOrderByAggregateInput
    _avg?: flash_saleAvgOrderByAggregateInput
    _max?: flash_saleMaxOrderByAggregateInput
    _min?: flash_saleMinOrderByAggregateInput
    _sum?: flash_saleSumOrderByAggregateInput
  }

  export type flash_saleScalarWhereWithAggregatesInput = {
    AND?: flash_saleScalarWhereWithAggregatesInput | flash_saleScalarWhereWithAggregatesInput[]
    OR?: flash_saleScalarWhereWithAggregatesInput[]
    NOT?: flash_saleScalarWhereWithAggregatesInput | flash_saleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"flash_sale"> | number
    diskon?: IntWithAggregatesFilter<"flash_sale"> | number
    start_date?: DateTimeWithAggregatesFilter<"flash_sale"> | Date | string
    end_date?: DateTimeWithAggregatesFilter<"flash_sale"> | Date | string
  }

  export type surveiWhereInput = {
    AND?: surveiWhereInput | surveiWhereInput[]
    OR?: surveiWhereInput[]
    NOT?: surveiWhereInput | surveiWhereInput[]
    id?: IntFilter<"survei"> | number
    keterangan?: StringFilter<"survei"> | string
  }

  export type surveiOrderByWithRelationInput = {
    id?: SortOrder
    keterangan?: SortOrder
    _relevance?: surveiOrderByRelevanceInput
  }

  export type surveiWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: surveiWhereInput | surveiWhereInput[]
    OR?: surveiWhereInput[]
    NOT?: surveiWhereInput | surveiWhereInput[]
    keterangan?: StringFilter<"survei"> | string
  }, "id">

  export type surveiOrderByWithAggregationInput = {
    id?: SortOrder
    keterangan?: SortOrder
    _count?: surveiCountOrderByAggregateInput
    _avg?: surveiAvgOrderByAggregateInput
    _max?: surveiMaxOrderByAggregateInput
    _min?: surveiMinOrderByAggregateInput
    _sum?: surveiSumOrderByAggregateInput
  }

  export type surveiScalarWhereWithAggregatesInput = {
    AND?: surveiScalarWhereWithAggregatesInput | surveiScalarWhereWithAggregatesInput[]
    OR?: surveiScalarWhereWithAggregatesInput[]
    NOT?: surveiScalarWhereWithAggregatesInput | surveiScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"survei"> | number
    keterangan?: StringWithAggregatesFilter<"survei"> | string
  }

  export type VwSearchWhereInput = {
    AND?: VwSearchWhereInput | VwSearchWhereInput[]
    OR?: VwSearchWhereInput[]
    NOT?: VwSearchWhereInput | VwSearchWhereInput[]
    id?: IntFilter<"VwSearch"> | number
    search?: StringFilter<"VwSearch"> | string
  }

  export type VwSearchOrderByWithRelationInput = {
    id?: SortOrder
    search?: SortOrder
    _relevance?: VwSearchOrderByRelevanceInput
  }

  export type VwSearchWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: VwSearchWhereInput | VwSearchWhereInput[]
    OR?: VwSearchWhereInput[]
    NOT?: VwSearchWhereInput | VwSearchWhereInput[]
    search?: StringFilter<"VwSearch"> | string
  }, "id">

  export type VwSearchOrderByWithAggregationInput = {
    id?: SortOrder
    search?: SortOrder
    _count?: VwSearchCountOrderByAggregateInput
    _avg?: VwSearchAvgOrderByAggregateInput
    _max?: VwSearchMaxOrderByAggregateInput
    _min?: VwSearchMinOrderByAggregateInput
    _sum?: VwSearchSumOrderByAggregateInput
  }

  export type VwSearchScalarWhereWithAggregatesInput = {
    AND?: VwSearchScalarWhereWithAggregatesInput | VwSearchScalarWhereWithAggregatesInput[]
    OR?: VwSearchScalarWhereWithAggregatesInput[]
    NOT?: VwSearchScalarWhereWithAggregatesInput | VwSearchScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"VwSearch"> | number
    search?: StringWithAggregatesFilter<"VwSearch"> | string
  }

  export type heroCreateInput = {
    nama: string
    produkimg: produkimgCreateNestedOneWithoutHeroInput
    skin?: skinCreateNestedOneWithoutHeroInput
  }

  export type heroUncheckedCreateInput = {
    id?: number
    nama: string
    id_produkimg: number
    skin?: skinUncheckedCreateNestedOneWithoutHeroInput
  }

  export type heroUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    produkimg?: produkimgUpdateOneRequiredWithoutHeroNestedInput
    skin?: skinUpdateOneWithoutHeroNestedInput
  }

  export type heroUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    id_produkimg?: IntFieldUpdateOperationsInput | number
    skin?: skinUncheckedUpdateOneWithoutHeroNestedInput
  }

  export type heroCreateManyInput = {
    id?: number
    nama: string
    id_produkimg: number
  }

  export type heroUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type heroUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    id_produkimg?: IntFieldUpdateOperationsInput | number
  }

  export type produkCreateInput = {
    nama: string
    harga_rupiah: number
    harga_ringgit?: number | null
    harga_dolar?: number | null
    deskripsi?: string | null
    rank: string
    status?: boolean
    diskon?: number | null
    highlight?: boolean | null
    email_akun?: string | null
    password_akun?: string | null
    buyer_email?: string | null
    buyer_lang?: string | null
    merchant_order_id?: string | null
    users?: usersCreateNestedOneWithoutProdukInput
    produkimg?: produkimgCreateNestedManyWithoutProdukInput
  }

  export type produkUncheckedCreateInput = {
    id?: number
    nama: string
    harga_rupiah: number
    harga_ringgit?: number | null
    harga_dolar?: number | null
    deskripsi?: string | null
    rank: string
    author_id?: number | null
    status?: boolean
    diskon?: number | null
    highlight?: boolean | null
    email_akun?: string | null
    password_akun?: string | null
    buyer_email?: string | null
    buyer_lang?: string | null
    merchant_order_id?: string | null
    produkimg?: produkimgUncheckedCreateNestedManyWithoutProdukInput
  }

  export type produkUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga_rupiah?: IntFieldUpdateOperationsInput | number
    harga_ringgit?: NullableIntFieldUpdateOperationsInput | number | null
    harga_dolar?: NullableIntFieldUpdateOperationsInput | number | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    diskon?: NullableFloatFieldUpdateOperationsInput | number | null
    highlight?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_akun?: NullableStringFieldUpdateOperationsInput | string | null
    password_akun?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_email?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_lang?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutProdukNestedInput
    produkimg?: produkimgUpdateManyWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga_rupiah?: IntFieldUpdateOperationsInput | number
    harga_ringgit?: NullableIntFieldUpdateOperationsInput | number | null
    harga_dolar?: NullableIntFieldUpdateOperationsInput | number | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: StringFieldUpdateOperationsInput | string
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    diskon?: NullableFloatFieldUpdateOperationsInput | number | null
    highlight?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_akun?: NullableStringFieldUpdateOperationsInput | string | null
    password_akun?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_email?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_lang?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    produkimg?: produkimgUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type produkCreateManyInput = {
    id?: number
    nama: string
    harga_rupiah: number
    harga_ringgit?: number | null
    harga_dolar?: number | null
    deskripsi?: string | null
    rank: string
    author_id?: number | null
    status?: boolean
    diskon?: number | null
    highlight?: boolean | null
    email_akun?: string | null
    password_akun?: string | null
    buyer_email?: string | null
    buyer_lang?: string | null
    merchant_order_id?: string | null
  }

  export type produkUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga_rupiah?: IntFieldUpdateOperationsInput | number
    harga_ringgit?: NullableIntFieldUpdateOperationsInput | number | null
    harga_dolar?: NullableIntFieldUpdateOperationsInput | number | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    diskon?: NullableFloatFieldUpdateOperationsInput | number | null
    highlight?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_akun?: NullableStringFieldUpdateOperationsInput | string | null
    password_akun?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_email?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_lang?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_order_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produkUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga_rupiah?: IntFieldUpdateOperationsInput | number
    harga_ringgit?: NullableIntFieldUpdateOperationsInput | number | null
    harga_dolar?: NullableIntFieldUpdateOperationsInput | number | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: StringFieldUpdateOperationsInput | string
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    diskon?: NullableFloatFieldUpdateOperationsInput | number | null
    highlight?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_akun?: NullableStringFieldUpdateOperationsInput | string | null
    password_akun?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_email?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_lang?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_order_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type produkimgCreateInput = {
    link: string
    urutan: number
    hero?: heroCreateNestedManyWithoutProdukimgInput
    produk: produkCreateNestedOneWithoutProdukimgInput
  }

  export type produkimgUncheckedCreateInput = {
    id?: number
    link: string
    id_produk: number
    urutan: number
    hero?: heroUncheckedCreateNestedManyWithoutProdukimgInput
  }

  export type produkimgUpdateInput = {
    link?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    hero?: heroUpdateManyWithoutProdukimgNestedInput
    produk?: produkUpdateOneRequiredWithoutProdukimgNestedInput
  }

  export type produkimgUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    id_produk?: IntFieldUpdateOperationsInput | number
    urutan?: IntFieldUpdateOperationsInput | number
    hero?: heroUncheckedUpdateManyWithoutProdukimgNestedInput
  }

  export type produkimgCreateManyInput = {
    id?: number
    link: string
    id_produk: number
    urutan: number
  }

  export type produkimgUpdateManyMutationInput = {
    link?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
  }

  export type produkimgUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    id_produk?: IntFieldUpdateOperationsInput | number
    urutan?: IntFieldUpdateOperationsInput | number
  }

  export type skinCreateInput = {
    nama: string
    alias_skin?: string | null
    hero: heroCreateNestedOneWithoutSkinInput
  }

  export type skinUncheckedCreateInput = {
    id?: number
    nama: string
    alias_skin?: string | null
    id_hero: number
  }

  export type skinUpdateInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alias_skin?: NullableStringFieldUpdateOperationsInput | string | null
    hero?: heroUpdateOneRequiredWithoutSkinNestedInput
  }

  export type skinUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alias_skin?: NullableStringFieldUpdateOperationsInput | string | null
    id_hero?: IntFieldUpdateOperationsInput | number
  }

  export type skinCreateManyInput = {
    id?: number
    nama: string
    alias_skin?: string | null
    id_hero: number
  }

  export type skinUpdateManyMutationInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alias_skin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skinUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alias_skin?: NullableStringFieldUpdateOperationsInput | string | null
    id_hero?: IntFieldUpdateOperationsInput | number
  }

  export type usersCreateInput = {
    username: string
    password: string
    produk?: produkCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    username: string
    password: string
    produk?: produkUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    produk?: produkUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    produk?: produkUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    username: string
    password: string
  }

  export type usersUpdateManyMutationInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type bannerCreateInput = {
    url: string
    highlight?: boolean
  }

  export type bannerUncheckedCreateInput = {
    id?: number
    url: string
    highlight?: boolean
  }

  export type bannerUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    highlight?: BoolFieldUpdateOperationsInput | boolean
  }

  export type bannerUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    highlight?: BoolFieldUpdateOperationsInput | boolean
  }

  export type bannerCreateManyInput = {
    id?: number
    url: string
    highlight?: boolean
  }

  export type bannerUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    highlight?: BoolFieldUpdateOperationsInput | boolean
  }

  export type bannerUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    highlight?: BoolFieldUpdateOperationsInput | boolean
  }

  export type pengumumanCreateInput = {
    pengumuman: string
    icon?: string | null
    icon_position?: string | null
    highlight?: boolean
  }

  export type pengumumanUncheckedCreateInput = {
    id?: number
    pengumuman: string
    icon?: string | null
    icon_position?: string | null
    highlight?: boolean
  }

  export type pengumumanUpdateInput = {
    pengumuman?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    icon_position?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: BoolFieldUpdateOperationsInput | boolean
  }

  export type pengumumanUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    pengumuman?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    icon_position?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: BoolFieldUpdateOperationsInput | boolean
  }

  export type pengumumanCreateManyInput = {
    id?: number
    pengumuman: string
    icon?: string | null
    icon_position?: string | null
    highlight?: boolean
  }

  export type pengumumanUpdateManyMutationInput = {
    pengumuman?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    icon_position?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: BoolFieldUpdateOperationsInput | boolean
  }

  export type pengumumanUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    pengumuman?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    icon_position?: NullableStringFieldUpdateOperationsInput | string | null
    highlight?: BoolFieldUpdateOperationsInput | boolean
  }

  export type kode_promoCreateInput = {
    kode: string
    diskon: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    max_claims?: number | null
    current_claims?: number
    min_purchase?: number | null
    max_discount?: number | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type kode_promoUncheckedCreateInput = {
    id?: number
    kode: string
    diskon: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    max_claims?: number | null
    current_claims?: number
    min_purchase?: number | null
    max_discount?: number | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type kode_promoUpdateInput = {
    kode?: StringFieldUpdateOperationsInput | string
    diskon?: FloatFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_claims?: NullableIntFieldUpdateOperationsInput | number | null
    current_claims?: IntFieldUpdateOperationsInput | number
    min_purchase?: NullableFloatFieldUpdateOperationsInput | number | null
    max_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kode_promoUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode?: StringFieldUpdateOperationsInput | string
    diskon?: FloatFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_claims?: NullableIntFieldUpdateOperationsInput | number | null
    current_claims?: IntFieldUpdateOperationsInput | number
    min_purchase?: NullableFloatFieldUpdateOperationsInput | number | null
    max_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kode_promoCreateManyInput = {
    id?: number
    kode: string
    diskon: number
    start_date?: Date | string | null
    end_date?: Date | string | null
    max_claims?: number | null
    current_claims?: number
    min_purchase?: number | null
    max_discount?: number | null
    active?: boolean
    created_at?: Date | string
    updated_at?: Date | string
  }

  export type kode_promoUpdateManyMutationInput = {
    kode?: StringFieldUpdateOperationsInput | string
    diskon?: FloatFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_claims?: NullableIntFieldUpdateOperationsInput | number | null
    current_claims?: IntFieldUpdateOperationsInput | number
    min_purchase?: NullableFloatFieldUpdateOperationsInput | number | null
    max_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type kode_promoUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    kode?: StringFieldUpdateOperationsInput | string
    diskon?: FloatFieldUpdateOperationsInput | number
    start_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    max_claims?: NullableIntFieldUpdateOperationsInput | number | null
    current_claims?: IntFieldUpdateOperationsInput | number
    min_purchase?: NullableFloatFieldUpdateOperationsInput | number | null
    max_discount?: NullableFloatFieldUpdateOperationsInput | number | null
    active?: BoolFieldUpdateOperationsInput | boolean
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    updated_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type flash_saleCreateInput = {
    diskon: number
    start_date: Date | string
    end_date: Date | string
  }

  export type flash_saleUncheckedCreateInput = {
    id?: number
    diskon: number
    start_date: Date | string
    end_date: Date | string
  }

  export type flash_saleUpdateInput = {
    diskon?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type flash_saleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    diskon?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type flash_saleCreateManyInput = {
    id?: number
    diskon: number
    start_date: Date | string
    end_date: Date | string
  }

  export type flash_saleUpdateManyMutationInput = {
    diskon?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type flash_saleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    diskon?: IntFieldUpdateOperationsInput | number
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type surveiCreateInput = {
    keterangan: string
  }

  export type surveiUncheckedCreateInput = {
    id?: number
    keterangan: string
  }

  export type surveiUpdateInput = {
    keterangan?: StringFieldUpdateOperationsInput | string
  }

  export type surveiUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
  }

  export type surveiCreateManyInput = {
    id?: number
    keterangan: string
  }

  export type surveiUpdateManyMutationInput = {
    keterangan?: StringFieldUpdateOperationsInput | string
  }

  export type surveiUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    keterangan?: StringFieldUpdateOperationsInput | string
  }

  export type VwSearchCreateInput = {
    id: number
    search: string
  }

  export type VwSearchUncheckedCreateInput = {
    id: number
    search: string
  }

  export type VwSearchUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    search?: StringFieldUpdateOperationsInput | string
  }

  export type VwSearchUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    search?: StringFieldUpdateOperationsInput | string
  }

  export type VwSearchCreateManyInput = {
    id: number
    search: string
  }

  export type VwSearchUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    search?: StringFieldUpdateOperationsInput | string
  }

  export type VwSearchUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    search?: StringFieldUpdateOperationsInput | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type ProdukimgScalarRelationFilter = {
    is?: produkimgWhereInput
    isNot?: produkimgWhereInput
  }

  export type SkinNullableScalarRelationFilter = {
    is?: skinWhereInput | null
    isNot?: skinWhereInput | null
  }

  export type heroOrderByRelevanceInput = {
    fields: heroOrderByRelevanceFieldEnum | heroOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type heroCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    id_produkimg?: SortOrder
  }

  export type heroAvgOrderByAggregateInput = {
    id?: SortOrder
    id_produkimg?: SortOrder
  }

  export type heroMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    id_produkimg?: SortOrder
  }

  export type heroMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    id_produkimg?: SortOrder
  }

  export type heroSumOrderByAggregateInput = {
    id?: SortOrder
    id_produkimg?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type ProdukimgListRelationFilter = {
    every?: produkimgWhereInput
    some?: produkimgWhereInput
    none?: produkimgWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type produkimgOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type produkOrderByRelevanceInput = {
    fields: produkOrderByRelevanceFieldEnum | produkOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type produkCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    harga_rupiah?: SortOrder
    harga_ringgit?: SortOrder
    harga_dolar?: SortOrder
    deskripsi?: SortOrder
    rank?: SortOrder
    author_id?: SortOrder
    status?: SortOrder
    diskon?: SortOrder
    highlight?: SortOrder
    email_akun?: SortOrder
    password_akun?: SortOrder
    buyer_email?: SortOrder
    buyer_lang?: SortOrder
    merchant_order_id?: SortOrder
  }

  export type produkAvgOrderByAggregateInput = {
    id?: SortOrder
    harga_rupiah?: SortOrder
    harga_ringgit?: SortOrder
    harga_dolar?: SortOrder
    author_id?: SortOrder
    diskon?: SortOrder
  }

  export type produkMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    harga_rupiah?: SortOrder
    harga_ringgit?: SortOrder
    harga_dolar?: SortOrder
    deskripsi?: SortOrder
    rank?: SortOrder
    author_id?: SortOrder
    status?: SortOrder
    diskon?: SortOrder
    highlight?: SortOrder
    email_akun?: SortOrder
    password_akun?: SortOrder
    buyer_email?: SortOrder
    buyer_lang?: SortOrder
    merchant_order_id?: SortOrder
  }

  export type produkMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    harga_rupiah?: SortOrder
    harga_ringgit?: SortOrder
    harga_dolar?: SortOrder
    deskripsi?: SortOrder
    rank?: SortOrder
    author_id?: SortOrder
    status?: SortOrder
    diskon?: SortOrder
    highlight?: SortOrder
    email_akun?: SortOrder
    password_akun?: SortOrder
    buyer_email?: SortOrder
    buyer_lang?: SortOrder
    merchant_order_id?: SortOrder
  }

  export type produkSumOrderByAggregateInput = {
    id?: SortOrder
    harga_rupiah?: SortOrder
    harga_ringgit?: SortOrder
    harga_dolar?: SortOrder
    author_id?: SortOrder
    diskon?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type HeroListRelationFilter = {
    every?: heroWhereInput
    some?: heroWhereInput
    none?: heroWhereInput
  }

  export type ProdukScalarRelationFilter = {
    is?: produkWhereInput
    isNot?: produkWhereInput
  }

  export type heroOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type produkimgOrderByRelevanceInput = {
    fields: produkimgOrderByRelevanceFieldEnum | produkimgOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type produkimgCountOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    id_produk?: SortOrder
    urutan?: SortOrder
  }

  export type produkimgAvgOrderByAggregateInput = {
    id?: SortOrder
    id_produk?: SortOrder
    urutan?: SortOrder
  }

  export type produkimgMaxOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    id_produk?: SortOrder
    urutan?: SortOrder
  }

  export type produkimgMinOrderByAggregateInput = {
    id?: SortOrder
    link?: SortOrder
    id_produk?: SortOrder
    urutan?: SortOrder
  }

  export type produkimgSumOrderByAggregateInput = {
    id?: SortOrder
    id_produk?: SortOrder
    urutan?: SortOrder
  }

  export type HeroScalarRelationFilter = {
    is?: heroWhereInput
    isNot?: heroWhereInput
  }

  export type skinOrderByRelevanceInput = {
    fields: skinOrderByRelevanceFieldEnum | skinOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type skinCountOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alias_skin?: SortOrder
    id_hero?: SortOrder
  }

  export type skinAvgOrderByAggregateInput = {
    id?: SortOrder
    id_hero?: SortOrder
  }

  export type skinMaxOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alias_skin?: SortOrder
    id_hero?: SortOrder
  }

  export type skinMinOrderByAggregateInput = {
    id?: SortOrder
    nama?: SortOrder
    alias_skin?: SortOrder
    id_hero?: SortOrder
  }

  export type skinSumOrderByAggregateInput = {
    id?: SortOrder
    id_hero?: SortOrder
  }

  export type ProdukListRelationFilter = {
    every?: produkWhereInput
    some?: produkWhereInput
    none?: produkWhereInput
  }

  export type produkOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersOrderByRelevanceInput = {
    fields: usersOrderByRelevanceFieldEnum | usersOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type bannerOrderByRelevanceInput = {
    fields: bannerOrderByRelevanceFieldEnum | bannerOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type bannerCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    highlight?: SortOrder
  }

  export type bannerAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type bannerMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    highlight?: SortOrder
  }

  export type bannerMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    highlight?: SortOrder
  }

  export type bannerSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pengumumanOrderByRelevanceInput = {
    fields: pengumumanOrderByRelevanceFieldEnum | pengumumanOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type pengumumanCountOrderByAggregateInput = {
    id?: SortOrder
    pengumuman?: SortOrder
    icon?: SortOrder
    icon_position?: SortOrder
    highlight?: SortOrder
  }

  export type pengumumanAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type pengumumanMaxOrderByAggregateInput = {
    id?: SortOrder
    pengumuman?: SortOrder
    icon?: SortOrder
    icon_position?: SortOrder
    highlight?: SortOrder
  }

  export type pengumumanMinOrderByAggregateInput = {
    id?: SortOrder
    pengumuman?: SortOrder
    icon?: SortOrder
    icon_position?: SortOrder
    highlight?: SortOrder
  }

  export type pengumumanSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type kode_promoOrderByRelevanceInput = {
    fields: kode_promoOrderByRelevanceFieldEnum | kode_promoOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type kode_promoCountOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    diskon?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    max_claims?: SortOrder
    current_claims?: SortOrder
    min_purchase?: SortOrder
    max_discount?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type kode_promoAvgOrderByAggregateInput = {
    id?: SortOrder
    diskon?: SortOrder
    max_claims?: SortOrder
    current_claims?: SortOrder
    min_purchase?: SortOrder
    max_discount?: SortOrder
  }

  export type kode_promoMaxOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    diskon?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    max_claims?: SortOrder
    current_claims?: SortOrder
    min_purchase?: SortOrder
    max_discount?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type kode_promoMinOrderByAggregateInput = {
    id?: SortOrder
    kode?: SortOrder
    diskon?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    max_claims?: SortOrder
    current_claims?: SortOrder
    min_purchase?: SortOrder
    max_discount?: SortOrder
    active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type kode_promoSumOrderByAggregateInput = {
    id?: SortOrder
    diskon?: SortOrder
    max_claims?: SortOrder
    current_claims?: SortOrder
    min_purchase?: SortOrder
    max_discount?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type flash_saleCountOrderByAggregateInput = {
    id?: SortOrder
    diskon?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type flash_saleAvgOrderByAggregateInput = {
    id?: SortOrder
    diskon?: SortOrder
  }

  export type flash_saleMaxOrderByAggregateInput = {
    id?: SortOrder
    diskon?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type flash_saleMinOrderByAggregateInput = {
    id?: SortOrder
    diskon?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
  }

  export type flash_saleSumOrderByAggregateInput = {
    id?: SortOrder
    diskon?: SortOrder
  }

  export type surveiOrderByRelevanceInput = {
    fields: surveiOrderByRelevanceFieldEnum | surveiOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type surveiCountOrderByAggregateInput = {
    id?: SortOrder
    keterangan?: SortOrder
  }

  export type surveiAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type surveiMaxOrderByAggregateInput = {
    id?: SortOrder
    keterangan?: SortOrder
  }

  export type surveiMinOrderByAggregateInput = {
    id?: SortOrder
    keterangan?: SortOrder
  }

  export type surveiSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VwSearchOrderByRelevanceInput = {
    fields: VwSearchOrderByRelevanceFieldEnum | VwSearchOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type VwSearchCountOrderByAggregateInput = {
    id?: SortOrder
    search?: SortOrder
  }

  export type VwSearchAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type VwSearchMaxOrderByAggregateInput = {
    id?: SortOrder
    search?: SortOrder
  }

  export type VwSearchMinOrderByAggregateInput = {
    id?: SortOrder
    search?: SortOrder
  }

  export type VwSearchSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type produkimgCreateNestedOneWithoutHeroInput = {
    create?: XOR<produkimgCreateWithoutHeroInput, produkimgUncheckedCreateWithoutHeroInput>
    connectOrCreate?: produkimgCreateOrConnectWithoutHeroInput
    connect?: produkimgWhereUniqueInput
  }

  export type skinCreateNestedOneWithoutHeroInput = {
    create?: XOR<skinCreateWithoutHeroInput, skinUncheckedCreateWithoutHeroInput>
    connectOrCreate?: skinCreateOrConnectWithoutHeroInput
    connect?: skinWhereUniqueInput
  }

  export type skinUncheckedCreateNestedOneWithoutHeroInput = {
    create?: XOR<skinCreateWithoutHeroInput, skinUncheckedCreateWithoutHeroInput>
    connectOrCreate?: skinCreateOrConnectWithoutHeroInput
    connect?: skinWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type produkimgUpdateOneRequiredWithoutHeroNestedInput = {
    create?: XOR<produkimgCreateWithoutHeroInput, produkimgUncheckedCreateWithoutHeroInput>
    connectOrCreate?: produkimgCreateOrConnectWithoutHeroInput
    upsert?: produkimgUpsertWithoutHeroInput
    connect?: produkimgWhereUniqueInput
    update?: XOR<XOR<produkimgUpdateToOneWithWhereWithoutHeroInput, produkimgUpdateWithoutHeroInput>, produkimgUncheckedUpdateWithoutHeroInput>
  }

  export type skinUpdateOneWithoutHeroNestedInput = {
    create?: XOR<skinCreateWithoutHeroInput, skinUncheckedCreateWithoutHeroInput>
    connectOrCreate?: skinCreateOrConnectWithoutHeroInput
    upsert?: skinUpsertWithoutHeroInput
    disconnect?: skinWhereInput | boolean
    delete?: skinWhereInput | boolean
    connect?: skinWhereUniqueInput
    update?: XOR<XOR<skinUpdateToOneWithWhereWithoutHeroInput, skinUpdateWithoutHeroInput>, skinUncheckedUpdateWithoutHeroInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type skinUncheckedUpdateOneWithoutHeroNestedInput = {
    create?: XOR<skinCreateWithoutHeroInput, skinUncheckedCreateWithoutHeroInput>
    connectOrCreate?: skinCreateOrConnectWithoutHeroInput
    upsert?: skinUpsertWithoutHeroInput
    disconnect?: skinWhereInput | boolean
    delete?: skinWhereInput | boolean
    connect?: skinWhereUniqueInput
    update?: XOR<XOR<skinUpdateToOneWithWhereWithoutHeroInput, skinUpdateWithoutHeroInput>, skinUncheckedUpdateWithoutHeroInput>
  }

  export type usersCreateNestedOneWithoutProdukInput = {
    create?: XOR<usersCreateWithoutProdukInput, usersUncheckedCreateWithoutProdukInput>
    connectOrCreate?: usersCreateOrConnectWithoutProdukInput
    connect?: usersWhereUniqueInput
  }

  export type produkimgCreateNestedManyWithoutProdukInput = {
    create?: XOR<produkimgCreateWithoutProdukInput, produkimgUncheckedCreateWithoutProdukInput> | produkimgCreateWithoutProdukInput[] | produkimgUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: produkimgCreateOrConnectWithoutProdukInput | produkimgCreateOrConnectWithoutProdukInput[]
    createMany?: produkimgCreateManyProdukInputEnvelope
    connect?: produkimgWhereUniqueInput | produkimgWhereUniqueInput[]
  }

  export type produkimgUncheckedCreateNestedManyWithoutProdukInput = {
    create?: XOR<produkimgCreateWithoutProdukInput, produkimgUncheckedCreateWithoutProdukInput> | produkimgCreateWithoutProdukInput[] | produkimgUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: produkimgCreateOrConnectWithoutProdukInput | produkimgCreateOrConnectWithoutProdukInput[]
    createMany?: produkimgCreateManyProdukInputEnvelope
    connect?: produkimgWhereUniqueInput | produkimgWhereUniqueInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type usersUpdateOneWithoutProdukNestedInput = {
    create?: XOR<usersCreateWithoutProdukInput, usersUncheckedCreateWithoutProdukInput>
    connectOrCreate?: usersCreateOrConnectWithoutProdukInput
    upsert?: usersUpsertWithoutProdukInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProdukInput, usersUpdateWithoutProdukInput>, usersUncheckedUpdateWithoutProdukInput>
  }

  export type produkimgUpdateManyWithoutProdukNestedInput = {
    create?: XOR<produkimgCreateWithoutProdukInput, produkimgUncheckedCreateWithoutProdukInput> | produkimgCreateWithoutProdukInput[] | produkimgUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: produkimgCreateOrConnectWithoutProdukInput | produkimgCreateOrConnectWithoutProdukInput[]
    upsert?: produkimgUpsertWithWhereUniqueWithoutProdukInput | produkimgUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: produkimgCreateManyProdukInputEnvelope
    set?: produkimgWhereUniqueInput | produkimgWhereUniqueInput[]
    disconnect?: produkimgWhereUniqueInput | produkimgWhereUniqueInput[]
    delete?: produkimgWhereUniqueInput | produkimgWhereUniqueInput[]
    connect?: produkimgWhereUniqueInput | produkimgWhereUniqueInput[]
    update?: produkimgUpdateWithWhereUniqueWithoutProdukInput | produkimgUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: produkimgUpdateManyWithWhereWithoutProdukInput | produkimgUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: produkimgScalarWhereInput | produkimgScalarWhereInput[]
  }

  export type produkimgUncheckedUpdateManyWithoutProdukNestedInput = {
    create?: XOR<produkimgCreateWithoutProdukInput, produkimgUncheckedCreateWithoutProdukInput> | produkimgCreateWithoutProdukInput[] | produkimgUncheckedCreateWithoutProdukInput[]
    connectOrCreate?: produkimgCreateOrConnectWithoutProdukInput | produkimgCreateOrConnectWithoutProdukInput[]
    upsert?: produkimgUpsertWithWhereUniqueWithoutProdukInput | produkimgUpsertWithWhereUniqueWithoutProdukInput[]
    createMany?: produkimgCreateManyProdukInputEnvelope
    set?: produkimgWhereUniqueInput | produkimgWhereUniqueInput[]
    disconnect?: produkimgWhereUniqueInput | produkimgWhereUniqueInput[]
    delete?: produkimgWhereUniqueInput | produkimgWhereUniqueInput[]
    connect?: produkimgWhereUniqueInput | produkimgWhereUniqueInput[]
    update?: produkimgUpdateWithWhereUniqueWithoutProdukInput | produkimgUpdateWithWhereUniqueWithoutProdukInput[]
    updateMany?: produkimgUpdateManyWithWhereWithoutProdukInput | produkimgUpdateManyWithWhereWithoutProdukInput[]
    deleteMany?: produkimgScalarWhereInput | produkimgScalarWhereInput[]
  }

  export type heroCreateNestedManyWithoutProdukimgInput = {
    create?: XOR<heroCreateWithoutProdukimgInput, heroUncheckedCreateWithoutProdukimgInput> | heroCreateWithoutProdukimgInput[] | heroUncheckedCreateWithoutProdukimgInput[]
    connectOrCreate?: heroCreateOrConnectWithoutProdukimgInput | heroCreateOrConnectWithoutProdukimgInput[]
    createMany?: heroCreateManyProdukimgInputEnvelope
    connect?: heroWhereUniqueInput | heroWhereUniqueInput[]
  }

  export type produkCreateNestedOneWithoutProdukimgInput = {
    create?: XOR<produkCreateWithoutProdukimgInput, produkUncheckedCreateWithoutProdukimgInput>
    connectOrCreate?: produkCreateOrConnectWithoutProdukimgInput
    connect?: produkWhereUniqueInput
  }

  export type heroUncheckedCreateNestedManyWithoutProdukimgInput = {
    create?: XOR<heroCreateWithoutProdukimgInput, heroUncheckedCreateWithoutProdukimgInput> | heroCreateWithoutProdukimgInput[] | heroUncheckedCreateWithoutProdukimgInput[]
    connectOrCreate?: heroCreateOrConnectWithoutProdukimgInput | heroCreateOrConnectWithoutProdukimgInput[]
    createMany?: heroCreateManyProdukimgInputEnvelope
    connect?: heroWhereUniqueInput | heroWhereUniqueInput[]
  }

  export type heroUpdateManyWithoutProdukimgNestedInput = {
    create?: XOR<heroCreateWithoutProdukimgInput, heroUncheckedCreateWithoutProdukimgInput> | heroCreateWithoutProdukimgInput[] | heroUncheckedCreateWithoutProdukimgInput[]
    connectOrCreate?: heroCreateOrConnectWithoutProdukimgInput | heroCreateOrConnectWithoutProdukimgInput[]
    upsert?: heroUpsertWithWhereUniqueWithoutProdukimgInput | heroUpsertWithWhereUniqueWithoutProdukimgInput[]
    createMany?: heroCreateManyProdukimgInputEnvelope
    set?: heroWhereUniqueInput | heroWhereUniqueInput[]
    disconnect?: heroWhereUniqueInput | heroWhereUniqueInput[]
    delete?: heroWhereUniqueInput | heroWhereUniqueInput[]
    connect?: heroWhereUniqueInput | heroWhereUniqueInput[]
    update?: heroUpdateWithWhereUniqueWithoutProdukimgInput | heroUpdateWithWhereUniqueWithoutProdukimgInput[]
    updateMany?: heroUpdateManyWithWhereWithoutProdukimgInput | heroUpdateManyWithWhereWithoutProdukimgInput[]
    deleteMany?: heroScalarWhereInput | heroScalarWhereInput[]
  }

  export type produkUpdateOneRequiredWithoutProdukimgNestedInput = {
    create?: XOR<produkCreateWithoutProdukimgInput, produkUncheckedCreateWithoutProdukimgInput>
    connectOrCreate?: produkCreateOrConnectWithoutProdukimgInput
    upsert?: produkUpsertWithoutProdukimgInput
    connect?: produkWhereUniqueInput
    update?: XOR<XOR<produkUpdateToOneWithWhereWithoutProdukimgInput, produkUpdateWithoutProdukimgInput>, produkUncheckedUpdateWithoutProdukimgInput>
  }

  export type heroUncheckedUpdateManyWithoutProdukimgNestedInput = {
    create?: XOR<heroCreateWithoutProdukimgInput, heroUncheckedCreateWithoutProdukimgInput> | heroCreateWithoutProdukimgInput[] | heroUncheckedCreateWithoutProdukimgInput[]
    connectOrCreate?: heroCreateOrConnectWithoutProdukimgInput | heroCreateOrConnectWithoutProdukimgInput[]
    upsert?: heroUpsertWithWhereUniqueWithoutProdukimgInput | heroUpsertWithWhereUniqueWithoutProdukimgInput[]
    createMany?: heroCreateManyProdukimgInputEnvelope
    set?: heroWhereUniqueInput | heroWhereUniqueInput[]
    disconnect?: heroWhereUniqueInput | heroWhereUniqueInput[]
    delete?: heroWhereUniqueInput | heroWhereUniqueInput[]
    connect?: heroWhereUniqueInput | heroWhereUniqueInput[]
    update?: heroUpdateWithWhereUniqueWithoutProdukimgInput | heroUpdateWithWhereUniqueWithoutProdukimgInput[]
    updateMany?: heroUpdateManyWithWhereWithoutProdukimgInput | heroUpdateManyWithWhereWithoutProdukimgInput[]
    deleteMany?: heroScalarWhereInput | heroScalarWhereInput[]
  }

  export type heroCreateNestedOneWithoutSkinInput = {
    create?: XOR<heroCreateWithoutSkinInput, heroUncheckedCreateWithoutSkinInput>
    connectOrCreate?: heroCreateOrConnectWithoutSkinInput
    connect?: heroWhereUniqueInput
  }

  export type heroUpdateOneRequiredWithoutSkinNestedInput = {
    create?: XOR<heroCreateWithoutSkinInput, heroUncheckedCreateWithoutSkinInput>
    connectOrCreate?: heroCreateOrConnectWithoutSkinInput
    upsert?: heroUpsertWithoutSkinInput
    connect?: heroWhereUniqueInput
    update?: XOR<XOR<heroUpdateToOneWithWhereWithoutSkinInput, heroUpdateWithoutSkinInput>, heroUncheckedUpdateWithoutSkinInput>
  }

  export type produkCreateNestedManyWithoutUsersInput = {
    create?: XOR<produkCreateWithoutUsersInput, produkUncheckedCreateWithoutUsersInput> | produkCreateWithoutUsersInput[] | produkUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: produkCreateOrConnectWithoutUsersInput | produkCreateOrConnectWithoutUsersInput[]
    createMany?: produkCreateManyUsersInputEnvelope
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
  }

  export type produkUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<produkCreateWithoutUsersInput, produkUncheckedCreateWithoutUsersInput> | produkCreateWithoutUsersInput[] | produkUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: produkCreateOrConnectWithoutUsersInput | produkCreateOrConnectWithoutUsersInput[]
    createMany?: produkCreateManyUsersInputEnvelope
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
  }

  export type produkUpdateManyWithoutUsersNestedInput = {
    create?: XOR<produkCreateWithoutUsersInput, produkUncheckedCreateWithoutUsersInput> | produkCreateWithoutUsersInput[] | produkUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: produkCreateOrConnectWithoutUsersInput | produkCreateOrConnectWithoutUsersInput[]
    upsert?: produkUpsertWithWhereUniqueWithoutUsersInput | produkUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: produkCreateManyUsersInputEnvelope
    set?: produkWhereUniqueInput | produkWhereUniqueInput[]
    disconnect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    delete?: produkWhereUniqueInput | produkWhereUniqueInput[]
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    update?: produkUpdateWithWhereUniqueWithoutUsersInput | produkUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: produkUpdateManyWithWhereWithoutUsersInput | produkUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: produkScalarWhereInput | produkScalarWhereInput[]
  }

  export type produkUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<produkCreateWithoutUsersInput, produkUncheckedCreateWithoutUsersInput> | produkCreateWithoutUsersInput[] | produkUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: produkCreateOrConnectWithoutUsersInput | produkCreateOrConnectWithoutUsersInput[]
    upsert?: produkUpsertWithWhereUniqueWithoutUsersInput | produkUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: produkCreateManyUsersInputEnvelope
    set?: produkWhereUniqueInput | produkWhereUniqueInput[]
    disconnect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    delete?: produkWhereUniqueInput | produkWhereUniqueInput[]
    connect?: produkWhereUniqueInput | produkWhereUniqueInput[]
    update?: produkUpdateWithWhereUniqueWithoutUsersInput | produkUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: produkUpdateManyWithWhereWithoutUsersInput | produkUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: produkScalarWhereInput | produkScalarWhereInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    search?: string
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type produkimgCreateWithoutHeroInput = {
    link: string
    urutan: number
    produk: produkCreateNestedOneWithoutProdukimgInput
  }

  export type produkimgUncheckedCreateWithoutHeroInput = {
    id?: number
    link: string
    id_produk: number
    urutan: number
  }

  export type produkimgCreateOrConnectWithoutHeroInput = {
    where: produkimgWhereUniqueInput
    create: XOR<produkimgCreateWithoutHeroInput, produkimgUncheckedCreateWithoutHeroInput>
  }

  export type skinCreateWithoutHeroInput = {
    nama: string
    alias_skin?: string | null
  }

  export type skinUncheckedCreateWithoutHeroInput = {
    id?: number
    nama: string
    alias_skin?: string | null
  }

  export type skinCreateOrConnectWithoutHeroInput = {
    where: skinWhereUniqueInput
    create: XOR<skinCreateWithoutHeroInput, skinUncheckedCreateWithoutHeroInput>
  }

  export type produkimgUpsertWithoutHeroInput = {
    update: XOR<produkimgUpdateWithoutHeroInput, produkimgUncheckedUpdateWithoutHeroInput>
    create: XOR<produkimgCreateWithoutHeroInput, produkimgUncheckedCreateWithoutHeroInput>
    where?: produkimgWhereInput
  }

  export type produkimgUpdateToOneWithWhereWithoutHeroInput = {
    where?: produkimgWhereInput
    data: XOR<produkimgUpdateWithoutHeroInput, produkimgUncheckedUpdateWithoutHeroInput>
  }

  export type produkimgUpdateWithoutHeroInput = {
    link?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    produk?: produkUpdateOneRequiredWithoutProdukimgNestedInput
  }

  export type produkimgUncheckedUpdateWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    id_produk?: IntFieldUpdateOperationsInput | number
    urutan?: IntFieldUpdateOperationsInput | number
  }

  export type skinUpsertWithoutHeroInput = {
    update: XOR<skinUpdateWithoutHeroInput, skinUncheckedUpdateWithoutHeroInput>
    create: XOR<skinCreateWithoutHeroInput, skinUncheckedCreateWithoutHeroInput>
    where?: skinWhereInput
  }

  export type skinUpdateToOneWithWhereWithoutHeroInput = {
    where?: skinWhereInput
    data: XOR<skinUpdateWithoutHeroInput, skinUncheckedUpdateWithoutHeroInput>
  }

  export type skinUpdateWithoutHeroInput = {
    nama?: StringFieldUpdateOperationsInput | string
    alias_skin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type skinUncheckedUpdateWithoutHeroInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    alias_skin?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateWithoutProdukInput = {
    username: string
    password: string
  }

  export type usersUncheckedCreateWithoutProdukInput = {
    id?: number
    username: string
    password: string
  }

  export type usersCreateOrConnectWithoutProdukInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProdukInput, usersUncheckedCreateWithoutProdukInput>
  }

  export type produkimgCreateWithoutProdukInput = {
    link: string
    urutan: number
    hero?: heroCreateNestedManyWithoutProdukimgInput
  }

  export type produkimgUncheckedCreateWithoutProdukInput = {
    id?: number
    link: string
    urutan: number
    hero?: heroUncheckedCreateNestedManyWithoutProdukimgInput
  }

  export type produkimgCreateOrConnectWithoutProdukInput = {
    where: produkimgWhereUniqueInput
    create: XOR<produkimgCreateWithoutProdukInput, produkimgUncheckedCreateWithoutProdukInput>
  }

  export type produkimgCreateManyProdukInputEnvelope = {
    data: produkimgCreateManyProdukInput | produkimgCreateManyProdukInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutProdukInput = {
    update: XOR<usersUpdateWithoutProdukInput, usersUncheckedUpdateWithoutProdukInput>
    create: XOR<usersCreateWithoutProdukInput, usersUncheckedCreateWithoutProdukInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProdukInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProdukInput, usersUncheckedUpdateWithoutProdukInput>
  }

  export type usersUpdateWithoutProdukInput = {
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type usersUncheckedUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
  }

  export type produkimgUpsertWithWhereUniqueWithoutProdukInput = {
    where: produkimgWhereUniqueInput
    update: XOR<produkimgUpdateWithoutProdukInput, produkimgUncheckedUpdateWithoutProdukInput>
    create: XOR<produkimgCreateWithoutProdukInput, produkimgUncheckedCreateWithoutProdukInput>
  }

  export type produkimgUpdateWithWhereUniqueWithoutProdukInput = {
    where: produkimgWhereUniqueInput
    data: XOR<produkimgUpdateWithoutProdukInput, produkimgUncheckedUpdateWithoutProdukInput>
  }

  export type produkimgUpdateManyWithWhereWithoutProdukInput = {
    where: produkimgScalarWhereInput
    data: XOR<produkimgUpdateManyMutationInput, produkimgUncheckedUpdateManyWithoutProdukInput>
  }

  export type produkimgScalarWhereInput = {
    AND?: produkimgScalarWhereInput | produkimgScalarWhereInput[]
    OR?: produkimgScalarWhereInput[]
    NOT?: produkimgScalarWhereInput | produkimgScalarWhereInput[]
    id?: IntFilter<"produkimg"> | number
    link?: StringFilter<"produkimg"> | string
    id_produk?: IntFilter<"produkimg"> | number
    urutan?: IntFilter<"produkimg"> | number
  }

  export type heroCreateWithoutProdukimgInput = {
    nama: string
    skin?: skinCreateNestedOneWithoutHeroInput
  }

  export type heroUncheckedCreateWithoutProdukimgInput = {
    id?: number
    nama: string
    skin?: skinUncheckedCreateNestedOneWithoutHeroInput
  }

  export type heroCreateOrConnectWithoutProdukimgInput = {
    where: heroWhereUniqueInput
    create: XOR<heroCreateWithoutProdukimgInput, heroUncheckedCreateWithoutProdukimgInput>
  }

  export type heroCreateManyProdukimgInputEnvelope = {
    data: heroCreateManyProdukimgInput | heroCreateManyProdukimgInput[]
    skipDuplicates?: boolean
  }

  export type produkCreateWithoutProdukimgInput = {
    nama: string
    harga_rupiah: number
    harga_ringgit?: number | null
    harga_dolar?: number | null
    deskripsi?: string | null
    rank: string
    status?: boolean
    diskon?: number | null
    highlight?: boolean | null
    email_akun?: string | null
    password_akun?: string | null
    buyer_email?: string | null
    buyer_lang?: string | null
    merchant_order_id?: string | null
    users?: usersCreateNestedOneWithoutProdukInput
  }

  export type produkUncheckedCreateWithoutProdukimgInput = {
    id?: number
    nama: string
    harga_rupiah: number
    harga_ringgit?: number | null
    harga_dolar?: number | null
    deskripsi?: string | null
    rank: string
    author_id?: number | null
    status?: boolean
    diskon?: number | null
    highlight?: boolean | null
    email_akun?: string | null
    password_akun?: string | null
    buyer_email?: string | null
    buyer_lang?: string | null
    merchant_order_id?: string | null
  }

  export type produkCreateOrConnectWithoutProdukimgInput = {
    where: produkWhereUniqueInput
    create: XOR<produkCreateWithoutProdukimgInput, produkUncheckedCreateWithoutProdukimgInput>
  }

  export type heroUpsertWithWhereUniqueWithoutProdukimgInput = {
    where: heroWhereUniqueInput
    update: XOR<heroUpdateWithoutProdukimgInput, heroUncheckedUpdateWithoutProdukimgInput>
    create: XOR<heroCreateWithoutProdukimgInput, heroUncheckedCreateWithoutProdukimgInput>
  }

  export type heroUpdateWithWhereUniqueWithoutProdukimgInput = {
    where: heroWhereUniqueInput
    data: XOR<heroUpdateWithoutProdukimgInput, heroUncheckedUpdateWithoutProdukimgInput>
  }

  export type heroUpdateManyWithWhereWithoutProdukimgInput = {
    where: heroScalarWhereInput
    data: XOR<heroUpdateManyMutationInput, heroUncheckedUpdateManyWithoutProdukimgInput>
  }

  export type heroScalarWhereInput = {
    AND?: heroScalarWhereInput | heroScalarWhereInput[]
    OR?: heroScalarWhereInput[]
    NOT?: heroScalarWhereInput | heroScalarWhereInput[]
    id?: IntFilter<"hero"> | number
    nama?: StringFilter<"hero"> | string
    id_produkimg?: IntFilter<"hero"> | number
  }

  export type produkUpsertWithoutProdukimgInput = {
    update: XOR<produkUpdateWithoutProdukimgInput, produkUncheckedUpdateWithoutProdukimgInput>
    create: XOR<produkCreateWithoutProdukimgInput, produkUncheckedCreateWithoutProdukimgInput>
    where?: produkWhereInput
  }

  export type produkUpdateToOneWithWhereWithoutProdukimgInput = {
    where?: produkWhereInput
    data: XOR<produkUpdateWithoutProdukimgInput, produkUncheckedUpdateWithoutProdukimgInput>
  }

  export type produkUpdateWithoutProdukimgInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga_rupiah?: IntFieldUpdateOperationsInput | number
    harga_ringgit?: NullableIntFieldUpdateOperationsInput | number | null
    harga_dolar?: NullableIntFieldUpdateOperationsInput | number | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    diskon?: NullableFloatFieldUpdateOperationsInput | number | null
    highlight?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_akun?: NullableStringFieldUpdateOperationsInput | string | null
    password_akun?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_email?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_lang?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    users?: usersUpdateOneWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateWithoutProdukimgInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga_rupiah?: IntFieldUpdateOperationsInput | number
    harga_ringgit?: NullableIntFieldUpdateOperationsInput | number | null
    harga_dolar?: NullableIntFieldUpdateOperationsInput | number | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: StringFieldUpdateOperationsInput | string
    author_id?: NullableIntFieldUpdateOperationsInput | number | null
    status?: BoolFieldUpdateOperationsInput | boolean
    diskon?: NullableFloatFieldUpdateOperationsInput | number | null
    highlight?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_akun?: NullableStringFieldUpdateOperationsInput | string | null
    password_akun?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_email?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_lang?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_order_id?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type heroCreateWithoutSkinInput = {
    nama: string
    produkimg: produkimgCreateNestedOneWithoutHeroInput
  }

  export type heroUncheckedCreateWithoutSkinInput = {
    id?: number
    nama: string
    id_produkimg: number
  }

  export type heroCreateOrConnectWithoutSkinInput = {
    where: heroWhereUniqueInput
    create: XOR<heroCreateWithoutSkinInput, heroUncheckedCreateWithoutSkinInput>
  }

  export type heroUpsertWithoutSkinInput = {
    update: XOR<heroUpdateWithoutSkinInput, heroUncheckedUpdateWithoutSkinInput>
    create: XOR<heroCreateWithoutSkinInput, heroUncheckedCreateWithoutSkinInput>
    where?: heroWhereInput
  }

  export type heroUpdateToOneWithWhereWithoutSkinInput = {
    where?: heroWhereInput
    data: XOR<heroUpdateWithoutSkinInput, heroUncheckedUpdateWithoutSkinInput>
  }

  export type heroUpdateWithoutSkinInput = {
    nama?: StringFieldUpdateOperationsInput | string
    produkimg?: produkimgUpdateOneRequiredWithoutHeroNestedInput
  }

  export type heroUncheckedUpdateWithoutSkinInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    id_produkimg?: IntFieldUpdateOperationsInput | number
  }

  export type produkCreateWithoutUsersInput = {
    nama: string
    harga_rupiah: number
    harga_ringgit?: number | null
    harga_dolar?: number | null
    deskripsi?: string | null
    rank: string
    status?: boolean
    diskon?: number | null
    highlight?: boolean | null
    email_akun?: string | null
    password_akun?: string | null
    buyer_email?: string | null
    buyer_lang?: string | null
    merchant_order_id?: string | null
    produkimg?: produkimgCreateNestedManyWithoutProdukInput
  }

  export type produkUncheckedCreateWithoutUsersInput = {
    id?: number
    nama: string
    harga_rupiah: number
    harga_ringgit?: number | null
    harga_dolar?: number | null
    deskripsi?: string | null
    rank: string
    status?: boolean
    diskon?: number | null
    highlight?: boolean | null
    email_akun?: string | null
    password_akun?: string | null
    buyer_email?: string | null
    buyer_lang?: string | null
    merchant_order_id?: string | null
    produkimg?: produkimgUncheckedCreateNestedManyWithoutProdukInput
  }

  export type produkCreateOrConnectWithoutUsersInput = {
    where: produkWhereUniqueInput
    create: XOR<produkCreateWithoutUsersInput, produkUncheckedCreateWithoutUsersInput>
  }

  export type produkCreateManyUsersInputEnvelope = {
    data: produkCreateManyUsersInput | produkCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type produkUpsertWithWhereUniqueWithoutUsersInput = {
    where: produkWhereUniqueInput
    update: XOR<produkUpdateWithoutUsersInput, produkUncheckedUpdateWithoutUsersInput>
    create: XOR<produkCreateWithoutUsersInput, produkUncheckedCreateWithoutUsersInput>
  }

  export type produkUpdateWithWhereUniqueWithoutUsersInput = {
    where: produkWhereUniqueInput
    data: XOR<produkUpdateWithoutUsersInput, produkUncheckedUpdateWithoutUsersInput>
  }

  export type produkUpdateManyWithWhereWithoutUsersInput = {
    where: produkScalarWhereInput
    data: XOR<produkUpdateManyMutationInput, produkUncheckedUpdateManyWithoutUsersInput>
  }

  export type produkScalarWhereInput = {
    AND?: produkScalarWhereInput | produkScalarWhereInput[]
    OR?: produkScalarWhereInput[]
    NOT?: produkScalarWhereInput | produkScalarWhereInput[]
    id?: IntFilter<"produk"> | number
    nama?: StringFilter<"produk"> | string
    harga_rupiah?: IntFilter<"produk"> | number
    harga_ringgit?: IntNullableFilter<"produk"> | number | null
    harga_dolar?: IntNullableFilter<"produk"> | number | null
    deskripsi?: StringNullableFilter<"produk"> | string | null
    rank?: StringFilter<"produk"> | string
    author_id?: IntNullableFilter<"produk"> | number | null
    status?: BoolFilter<"produk"> | boolean
    diskon?: FloatNullableFilter<"produk"> | number | null
    highlight?: BoolNullableFilter<"produk"> | boolean | null
    email_akun?: StringNullableFilter<"produk"> | string | null
    password_akun?: StringNullableFilter<"produk"> | string | null
    buyer_email?: StringNullableFilter<"produk"> | string | null
    buyer_lang?: StringNullableFilter<"produk"> | string | null
    merchant_order_id?: StringNullableFilter<"produk"> | string | null
  }

  export type produkimgCreateManyProdukInput = {
    id?: number
    link: string
    urutan: number
  }

  export type produkimgUpdateWithoutProdukInput = {
    link?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    hero?: heroUpdateManyWithoutProdukimgNestedInput
  }

  export type produkimgUncheckedUpdateWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
    hero?: heroUncheckedUpdateManyWithoutProdukimgNestedInput
  }

  export type produkimgUncheckedUpdateManyWithoutProdukInput = {
    id?: IntFieldUpdateOperationsInput | number
    link?: StringFieldUpdateOperationsInput | string
    urutan?: IntFieldUpdateOperationsInput | number
  }

  export type heroCreateManyProdukimgInput = {
    id?: number
    nama: string
  }

  export type heroUpdateWithoutProdukimgInput = {
    nama?: StringFieldUpdateOperationsInput | string
    skin?: skinUpdateOneWithoutHeroNestedInput
  }

  export type heroUncheckedUpdateWithoutProdukimgInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    skin?: skinUncheckedUpdateOneWithoutHeroNestedInput
  }

  export type heroUncheckedUpdateManyWithoutProdukimgInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
  }

  export type produkCreateManyUsersInput = {
    id?: number
    nama: string
    harga_rupiah: number
    harga_ringgit?: number | null
    harga_dolar?: number | null
    deskripsi?: string | null
    rank: string
    status?: boolean
    diskon?: number | null
    highlight?: boolean | null
    email_akun?: string | null
    password_akun?: string | null
    buyer_email?: string | null
    buyer_lang?: string | null
    merchant_order_id?: string | null
  }

  export type produkUpdateWithoutUsersInput = {
    nama?: StringFieldUpdateOperationsInput | string
    harga_rupiah?: IntFieldUpdateOperationsInput | number
    harga_ringgit?: NullableIntFieldUpdateOperationsInput | number | null
    harga_dolar?: NullableIntFieldUpdateOperationsInput | number | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    diskon?: NullableFloatFieldUpdateOperationsInput | number | null
    highlight?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_akun?: NullableStringFieldUpdateOperationsInput | string | null
    password_akun?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_email?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_lang?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    produkimg?: produkimgUpdateManyWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga_rupiah?: IntFieldUpdateOperationsInput | number
    harga_ringgit?: NullableIntFieldUpdateOperationsInput | number | null
    harga_dolar?: NullableIntFieldUpdateOperationsInput | number | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    diskon?: NullableFloatFieldUpdateOperationsInput | number | null
    highlight?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_akun?: NullableStringFieldUpdateOperationsInput | string | null
    password_akun?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_email?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_lang?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_order_id?: NullableStringFieldUpdateOperationsInput | string | null
    produkimg?: produkimgUncheckedUpdateManyWithoutProdukNestedInput
  }

  export type produkUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    nama?: StringFieldUpdateOperationsInput | string
    harga_rupiah?: IntFieldUpdateOperationsInput | number
    harga_ringgit?: NullableIntFieldUpdateOperationsInput | number | null
    harga_dolar?: NullableIntFieldUpdateOperationsInput | number | null
    deskripsi?: NullableStringFieldUpdateOperationsInput | string | null
    rank?: StringFieldUpdateOperationsInput | string
    status?: BoolFieldUpdateOperationsInput | boolean
    diskon?: NullableFloatFieldUpdateOperationsInput | number | null
    highlight?: NullableBoolFieldUpdateOperationsInput | boolean | null
    email_akun?: NullableStringFieldUpdateOperationsInput | string | null
    password_akun?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_email?: NullableStringFieldUpdateOperationsInput | string | null
    buyer_lang?: NullableStringFieldUpdateOperationsInput | string | null
    merchant_order_id?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}