import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
import * as ApolloReactHoc from '@apollo/client/react/hoc';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

/**  A keystone list  */
export type CartItem = {
  __typename?: 'CartItem';
  id: Scalars['ID'];
  quantity?: Maybe<Scalars['Int']>;
  product?: Maybe<Product>;
  user?: Maybe<User>;
};

export type CartItemCreateInput = {
  quantity?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
};

export type CartItemOrderByInput = {
  id?: Maybe<OrderDirection>;
  quantity?: Maybe<OrderDirection>;
};

export type CartItemRelateToManyInput = {
  create?: Maybe<Array<Maybe<CartItemCreateInput>>>;
  connect?: Maybe<Array<Maybe<CartItemWhereUniqueInput>>>;
  disconnect?: Maybe<Array<Maybe<CartItemWhereUniqueInput>>>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type CartItemUpdateInput = {
  quantity?: Maybe<Scalars['Int']>;
  product?: Maybe<ProductRelateToOneInput>;
  user?: Maybe<UserRelateToOneInput>;
};

export type CartItemWhereInput = {
  AND?: Maybe<Array<CartItemWhereInput>>;
  OR?: Maybe<Array<CartItemWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  quantity?: Maybe<Scalars['Int']>;
  quantity_not?: Maybe<Scalars['Int']>;
  quantity_lt?: Maybe<Scalars['Int']>;
  quantity_lte?: Maybe<Scalars['Int']>;
  quantity_gt?: Maybe<Scalars['Int']>;
  quantity_gte?: Maybe<Scalars['Int']>;
  quantity_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  quantity_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  product?: Maybe<ProductWhereInput>;
  product_is_null?: Maybe<Scalars['Boolean']>;
  user?: Maybe<UserWhereInput>;
  user_is_null?: Maybe<Scalars['Boolean']>;
};

export type CartItemWhereUniqueInput = {
  id: Scalars['ID'];
};

export type CartItemsCreateInput = {
  data?: Maybe<CartItemCreateInput>;
};

export type CartItemsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<CartItemUpdateInput>;
};

export type CreateInitialUserInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};


export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSignout: Scalars['Boolean'];
  enableSessionItem: Scalars['Boolean'];
  lists: Array<KeystoneAdminUiListMeta>;
  list?: Maybe<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  path: Scalars['String'];
  label: Scalars['String'];
  isOrderable: Scalars['Boolean'];
  fieldMeta?: Maybe<Scalars['JSON']>;
  viewsIndex: Scalars['Int'];
  customViewsIndex?: Maybe<Scalars['Int']>;
  createView: KeystoneAdminUiFieldMetaCreateView;
  listView: KeystoneAdminUiFieldMetaListView;
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id: Scalars['ID'];
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode: KeystoneAdminUiFieldMetaItemViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Read = 'read',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Read = 'read',
  Hidden = 'hidden'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  key: Scalars['String'];
  itemQueryName: Scalars['String'];
  listQueryName: Scalars['String'];
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  path: Scalars['String'];
  label: Scalars['String'];
  singular: Scalars['String'];
  plural: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  initialColumns: Array<Scalars['String']>;
  pageSize: Scalars['Int'];
  labelField: Scalars['String'];
  fields: Array<KeystoneAdminUiFieldMeta>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  field: Scalars['String'];
  direction: KeystoneAdminUiSortDirection;
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  /**  Create a single User item.  */
  createUser?: Maybe<User>;
  /**  Create multiple User items.  */
  createUsers?: Maybe<Array<Maybe<User>>>;
  /**  Update a single User item by ID.  */
  updateUser?: Maybe<User>;
  /**  Update multiple User items by ID.  */
  updateUsers?: Maybe<Array<Maybe<User>>>;
  /**  Delete a single User item by ID.  */
  deleteUser?: Maybe<User>;
  /**  Delete multiple User items by ID.  */
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  /**  Create a single Product item.  */
  createProduct?: Maybe<Product>;
  /**  Create multiple Product items.  */
  createProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Update a single Product item by ID.  */
  updateProduct?: Maybe<Product>;
  /**  Update multiple Product items by ID.  */
  updateProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Delete a single Product item by ID.  */
  deleteProduct?: Maybe<Product>;
  /**  Delete multiple Product items by ID.  */
  deleteProducts?: Maybe<Array<Maybe<Product>>>;
  /**  Create a single CartItem item.  */
  createCartItem?: Maybe<CartItem>;
  /**  Create multiple CartItem items.  */
  createCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Update a single CartItem item by ID.  */
  updateCartItem?: Maybe<CartItem>;
  /**  Update multiple CartItem items by ID.  */
  updateCartItems?: Maybe<Array<Maybe<CartItem>>>;
  /**  Delete a single CartItem item by ID.  */
  deleteCartItem?: Maybe<CartItem>;
  /**  Delete multiple CartItem items by ID.  */
  deleteCartItems?: Maybe<Array<Maybe<CartItem>>>;
  authenticateUserWithPassword: UserAuthenticationWithPasswordResult;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  addToCart?: Maybe<CartItem>;
  endSession: Scalars['Boolean'];
};


export type MutationCreateUserArgs = {
  data?: Maybe<UserCreateInput>;
};


export type MutationCreateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersCreateInput>>>;
};


export type MutationUpdateUserArgs = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};


export type MutationUpdateUsersArgs = {
  data?: Maybe<Array<Maybe<UsersUpdateInput>>>;
};


export type MutationDeleteUserArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteUsersArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateProductArgs = {
  data?: Maybe<ProductCreateInput>;
};


export type MutationCreateProductsArgs = {
  data?: Maybe<Array<Maybe<ProductsCreateInput>>>;
};


export type MutationUpdateProductArgs = {
  id: Scalars['ID'];
  data?: Maybe<ProductUpdateInput>;
};


export type MutationUpdateProductsArgs = {
  data?: Maybe<Array<Maybe<ProductsUpdateInput>>>;
};


export type MutationDeleteProductArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteProductsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationCreateCartItemArgs = {
  data?: Maybe<CartItemCreateInput>;
};


export type MutationCreateCartItemsArgs = {
  data?: Maybe<Array<Maybe<CartItemsCreateInput>>>;
};


export type MutationUpdateCartItemArgs = {
  id: Scalars['ID'];
  data?: Maybe<CartItemUpdateInput>;
};


export type MutationUpdateCartItemsArgs = {
  data?: Maybe<Array<Maybe<CartItemsUpdateInput>>>;
};


export type MutationDeleteCartItemArgs = {
  id: Scalars['ID'];
};


export type MutationDeleteCartItemsArgs = {
  ids?: Maybe<Array<Scalars['ID']>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationAddToCartArgs = {
  productId?: Maybe<Scalars['ID']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export enum PasswordAuthErrorCode {
  Failure = 'FAILURE',
  IdentityNotFound = 'IDENTITY_NOT_FOUND',
  SecretNotSet = 'SECRET_NOT_SET',
  MultipleIdentityMatches = 'MULTIPLE_IDENTITY_MATCHES',
  SecretMismatch = 'SECRET_MISMATCH'
}

/**  A keystone list  */
export type Product = {
  __typename?: 'Product';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type ProductCreateInput = {
  name?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type ProductOrderByInput = {
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  img?: Maybe<OrderDirection>;
  description?: Maybe<OrderDirection>;
  price?: Maybe<OrderDirection>;
};

export type ProductRelateToOneInput = {
  create?: Maybe<ProductCreateInput>;
  connect?: Maybe<ProductWhereUniqueInput>;
  disconnect?: Maybe<ProductWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type ProductUpdateInput = {
  name?: Maybe<Scalars['String']>;
  img?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  price?: Maybe<Scalars['Int']>;
};

export type ProductWhereInput = {
  AND?: Maybe<Array<ProductWhereInput>>;
  OR?: Maybe<Array<ProductWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  img?: Maybe<Scalars['String']>;
  img_not?: Maybe<Scalars['String']>;
  img_contains?: Maybe<Scalars['String']>;
  img_not_contains?: Maybe<Scalars['String']>;
  img_starts_with?: Maybe<Scalars['String']>;
  img_not_starts_with?: Maybe<Scalars['String']>;
  img_ends_with?: Maybe<Scalars['String']>;
  img_not_ends_with?: Maybe<Scalars['String']>;
  img_i?: Maybe<Scalars['String']>;
  img_not_i?: Maybe<Scalars['String']>;
  img_contains_i?: Maybe<Scalars['String']>;
  img_not_contains_i?: Maybe<Scalars['String']>;
  img_starts_with_i?: Maybe<Scalars['String']>;
  img_not_starts_with_i?: Maybe<Scalars['String']>;
  img_ends_with_i?: Maybe<Scalars['String']>;
  img_not_ends_with_i?: Maybe<Scalars['String']>;
  img_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  img_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description?: Maybe<Scalars['String']>;
  description_not?: Maybe<Scalars['String']>;
  description_contains?: Maybe<Scalars['String']>;
  description_not_contains?: Maybe<Scalars['String']>;
  description_starts_with?: Maybe<Scalars['String']>;
  description_not_starts_with?: Maybe<Scalars['String']>;
  description_ends_with?: Maybe<Scalars['String']>;
  description_not_ends_with?: Maybe<Scalars['String']>;
  description_i?: Maybe<Scalars['String']>;
  description_not_i?: Maybe<Scalars['String']>;
  description_contains_i?: Maybe<Scalars['String']>;
  description_not_contains_i?: Maybe<Scalars['String']>;
  description_starts_with_i?: Maybe<Scalars['String']>;
  description_not_starts_with_i?: Maybe<Scalars['String']>;
  description_ends_with_i?: Maybe<Scalars['String']>;
  description_not_ends_with_i?: Maybe<Scalars['String']>;
  description_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  description_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  price?: Maybe<Scalars['Int']>;
  price_not?: Maybe<Scalars['Int']>;
  price_lt?: Maybe<Scalars['Int']>;
  price_lte?: Maybe<Scalars['Int']>;
  price_gt?: Maybe<Scalars['Int']>;
  price_gte?: Maybe<Scalars['Int']>;
  price_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
  price_not_in?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ProductWhereUniqueInput = {
  id: Scalars['ID'];
};

export type ProductsCreateInput = {
  data?: Maybe<ProductCreateInput>;
};

export type ProductsUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<ProductUpdateInput>;
};

export type Query = {
  __typename?: 'Query';
  /**  Search for all User items which match the where clause.  */
  allUsers?: Maybe<Array<User>>;
  /**  Search for the User item with the matching ID.  */
  User?: Maybe<User>;
  /**
   *  Perform a meta-query on all User items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use usersCount instead.
   */
  _allUsersMeta?: Maybe<_QueryMeta>;
  usersCount?: Maybe<Scalars['Int']>;
  /**  Search for all Product items which match the where clause.  */
  allProducts?: Maybe<Array<Product>>;
  /**  Search for the Product item with the matching ID.  */
  Product?: Maybe<Product>;
  /**
   *  Perform a meta-query on all Product items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use productsCount instead.
   */
  _allProductsMeta?: Maybe<_QueryMeta>;
  productsCount?: Maybe<Scalars['Int']>;
  /**  Search for all CartItem items which match the where clause.  */
  allCartItems?: Maybe<Array<CartItem>>;
  /**  Search for the CartItem item with the matching ID.  */
  CartItem?: Maybe<CartItem>;
  /**
   *  Perform a meta-query on all CartItem items which match the where clause.
   * @deprecated This query will be removed in a future version. Please use cartItemsCount instead.
   */
  _allCartItemsMeta?: Maybe<_QueryMeta>;
  cartItemsCount?: Maybe<Scalars['Int']>;
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
};


export type QueryAllUsersArgs = {
  where?: UserWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<UserOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type Query_AllUsersMetaArgs = {
  where?: UserWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<UserOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};


export type QueryAllProductsArgs = {
  where?: ProductWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<ProductOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryProductArgs = {
  where: ProductWhereUniqueInput;
};


export type Query_AllProductsMetaArgs = {
  where?: ProductWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<ProductOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryProductsCountArgs = {
  where?: ProductWhereInput;
};


export type QueryAllCartItemsArgs = {
  where?: CartItemWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<CartItemOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryCartItemArgs = {
  where: CartItemWhereUniqueInput;
};


export type Query_AllCartItemsMetaArgs = {
  where?: CartItemWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<CartItemOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


export type QueryCartItemsCountArgs = {
  where?: CartItemWhereInput;
};

export enum SortCartItemsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  QuantityAsc = 'quantity_ASC',
  QuantityDesc = 'quantity_DESC'
}

export enum SortProductsBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  ImgAsc = 'img_ASC',
  ImgDesc = 'img_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  PriceAsc = 'price_ASC',
  PriceDesc = 'price_DESC'
}

export enum SortUsersBy {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  EmailAsc = 'email_ASC',
  EmailDesc = 'email_DESC'
}


/**  A keystone list  */
export type User = {
  __typename?: 'User';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  cart: Array<CartItem>;
  /** @deprecated This query will be removed in a future version. Please use cartCount instead. */
  _cartMeta?: Maybe<_QueryMeta>;
  cartCount?: Maybe<Scalars['Int']>;
};


/**  A keystone list  */
export type UserCartArgs = {
  where?: CartItemWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<CartItemOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/**  A keystone list  */
export type User_CartMetaArgs = {
  where?: CartItemWhereInput;
  search?: Maybe<Scalars['String']>;
  orderBy?: Array<CartItemOrderByInput>;
  first?: Maybe<Scalars['Int']>;
  skip?: Scalars['Int'];
};


/**  A keystone list  */
export type UserCartCountArgs = {
  where?: CartItemWhereInput;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  code: PasswordAuthErrorCode;
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordSuccess | UserAuthenticationWithPasswordFailure;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  sessionToken: Scalars['String'];
  item: User;
};

export type UserCreateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  cart?: Maybe<CartItemRelateToManyInput>;
};

export type UserOrderByInput = {
  id?: Maybe<OrderDirection>;
  name?: Maybe<OrderDirection>;
  email?: Maybe<OrderDirection>;
};

export type UserRelateToOneInput = {
  create?: Maybe<UserCreateInput>;
  connect?: Maybe<UserWhereUniqueInput>;
  disconnect?: Maybe<UserWhereUniqueInput>;
  disconnectAll?: Maybe<Scalars['Boolean']>;
};

export type UserUpdateInput = {
  name?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  cart?: Maybe<CartItemRelateToManyInput>;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  id?: Maybe<Scalars['ID']>;
  id_not?: Maybe<Scalars['ID']>;
  id_lt?: Maybe<Scalars['ID']>;
  id_lte?: Maybe<Scalars['ID']>;
  id_gt?: Maybe<Scalars['ID']>;
  id_gte?: Maybe<Scalars['ID']>;
  id_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  id_not_in?: Maybe<Array<Maybe<Scalars['ID']>>>;
  name?: Maybe<Scalars['String']>;
  name_not?: Maybe<Scalars['String']>;
  name_contains?: Maybe<Scalars['String']>;
  name_not_contains?: Maybe<Scalars['String']>;
  name_starts_with?: Maybe<Scalars['String']>;
  name_not_starts_with?: Maybe<Scalars['String']>;
  name_ends_with?: Maybe<Scalars['String']>;
  name_not_ends_with?: Maybe<Scalars['String']>;
  name_i?: Maybe<Scalars['String']>;
  name_not_i?: Maybe<Scalars['String']>;
  name_contains_i?: Maybe<Scalars['String']>;
  name_not_contains_i?: Maybe<Scalars['String']>;
  name_starts_with_i?: Maybe<Scalars['String']>;
  name_not_starts_with_i?: Maybe<Scalars['String']>;
  name_ends_with_i?: Maybe<Scalars['String']>;
  name_not_ends_with_i?: Maybe<Scalars['String']>;
  name_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  name_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email?: Maybe<Scalars['String']>;
  email_not?: Maybe<Scalars['String']>;
  email_contains?: Maybe<Scalars['String']>;
  email_not_contains?: Maybe<Scalars['String']>;
  email_starts_with?: Maybe<Scalars['String']>;
  email_not_starts_with?: Maybe<Scalars['String']>;
  email_ends_with?: Maybe<Scalars['String']>;
  email_not_ends_with?: Maybe<Scalars['String']>;
  email_i?: Maybe<Scalars['String']>;
  email_not_i?: Maybe<Scalars['String']>;
  email_contains_i?: Maybe<Scalars['String']>;
  email_not_contains_i?: Maybe<Scalars['String']>;
  email_starts_with_i?: Maybe<Scalars['String']>;
  email_not_starts_with_i?: Maybe<Scalars['String']>;
  email_ends_with_i?: Maybe<Scalars['String']>;
  email_not_ends_with_i?: Maybe<Scalars['String']>;
  email_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  email_not_in?: Maybe<Array<Maybe<Scalars['String']>>>;
  password_is_set?: Maybe<Scalars['Boolean']>;
  /**  condition must be true for all nodes  */
  cart_every?: Maybe<CartItemWhereInput>;
  /**  condition must be true for at least 1 node  */
  cart_some?: Maybe<CartItemWhereInput>;
  /**  condition must be false for all nodes  */
  cart_none?: Maybe<CartItemWhereInput>;
};

export type UserWhereUniqueInput = {
  id: Scalars['ID'];
};

export type UsersCreateInput = {
  data?: Maybe<UserCreateInput>;
};

export type UsersUpdateInput = {
  id: Scalars['ID'];
  data?: Maybe<UserUpdateInput>;
};

export type _QueryMeta = {
  __typename?: '_QueryMeta';
  count?: Maybe<Scalars['Int']>;
};

export type AddToCartMutationVariables = Exact<{
  id: Scalars['ID'];
}>;


export type AddToCartMutation = (
  { __typename?: 'Mutation' }
  & { addToCart?: Maybe<(
    { __typename?: 'CartItem' }
    & Pick<CartItem, 'id'>
  )> }
);

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = (
  { __typename?: 'Mutation' }
  & { authenticateUserWithPassword: (
    { __typename?: 'UserAuthenticationWithPasswordSuccess' }
    & { item: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'email' | 'name'>
    ) }
  ) | (
    { __typename?: 'UserAuthenticationWithPasswordFailure' }
    & Pick<UserAuthenticationWithPasswordFailure, 'code' | 'message'>
  ) }
);

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'endSession'>
);

export type AllProductsQueryVariables = Exact<{
  skip?: Maybe<Scalars['Int']>;
  first?: Maybe<Scalars['Int']>;
}>;


export type AllProductsQuery = (
  { __typename?: 'Query' }
  & { allProducts?: Maybe<Array<(
    { __typename?: 'Product' }
    & Pick<Product, 'id' | 'name' | 'price' | 'img' | 'description'>
  )>> }
);

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = (
  { __typename?: 'Query' }
  & { authenticatedItem?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email' | 'name'>
    & { cart: Array<(
      { __typename?: 'CartItem' }
      & Pick<CartItem, 'id' | 'quantity'>
      & { product?: Maybe<(
        { __typename?: 'Product' }
        & Pick<Product, 'id' | 'price' | 'name' | 'description' | 'img'>
      )> }
    )> }
  )> }
);


export const AddToCartDocument = gql`
    mutation AddToCart($id: ID!) {
  addToCart(productId: $id) {
    id
  }
}
    `;
export type AddToCartMutationFn = Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>;
export type AddToCartProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<AddToCartMutation, AddToCartMutationVariables>
    } & TChildProps;
export function withAddToCart<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AddToCartMutation,
  AddToCartMutationVariables,
  AddToCartProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, AddToCartMutation, AddToCartMutationVariables, AddToCartProps<TChildProps, TDataName>>(AddToCartDocument, {
      alias: 'addToCart',
      ...operationOptions
    });
};

/**
 * __useAddToCartMutation__
 *
 * To run a mutation, you first call `useAddToCartMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddToCartMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addToCartMutation, { data, loading, error }] = useAddToCartMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useAddToCartMutation(baseOptions?: Apollo.MutationHookOptions<AddToCartMutation, AddToCartMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddToCartMutation, AddToCartMutationVariables>(AddToCartDocument, options);
      }
export type AddToCartMutationHookResult = ReturnType<typeof useAddToCartMutation>;
export type AddToCartMutationResult = Apollo.MutationResult<AddToCartMutation>;
export type AddToCartMutationOptions = Apollo.BaseMutationOptions<AddToCartMutation, AddToCartMutationVariables>;
export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  authenticateUserWithPassword(email: $email, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      item {
        id
        email
        name
      }
    }
    ... on UserAuthenticationWithPasswordFailure {
      code
      message
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;
export type SignInProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<SignInMutation, SignInMutationVariables>
    } & TChildProps;
export function withSignIn<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SignInMutation,
  SignInMutationVariables,
  SignInProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SignInMutation, SignInMutationVariables, SignInProps<TChildProps, TDataName>>(SignInDocument, {
      alias: 'signIn',
      ...operationOptions
    });
};

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = gql`
    mutation SignOut {
  endSession
}
    `;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;
export type SignOutProps<TChildProps = {}, TDataName extends string = 'mutate'> = {
      [key in TDataName]: Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>
    } & TChildProps;
export function withSignOut<TProps, TChildProps = {}, TDataName extends string = 'mutate'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  SignOutMutation,
  SignOutMutationVariables,
  SignOutProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withMutation<TProps, SignOutMutation, SignOutMutationVariables, SignOutProps<TChildProps, TDataName>>(SignOutDocument, {
      alias: 'signOut',
      ...operationOptions
    });
};

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
      }
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const AllProductsDocument = gql`
    query AllProducts($skip: Int = 0, $first: Int) {
  allProducts(first: $first, skip: $skip) {
    id
    name
    price
    img
    description
  }
}
    `;
export type AllProductsProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<AllProductsQuery, AllProductsQueryVariables>
    } & TChildProps;
export function withAllProducts<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  AllProductsQuery,
  AllProductsQueryVariables,
  AllProductsProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, AllProductsQuery, AllProductsQueryVariables, AllProductsProps<TChildProps, TDataName>>(AllProductsDocument, {
      alias: 'allProducts',
      ...operationOptions
    });
};

/**
 * __useAllProductsQuery__
 *
 * To run a query within a React component, call `useAllProductsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllProductsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllProductsQuery({
 *   variables: {
 *      skip: // value for 'skip'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useAllProductsQuery(baseOptions?: Apollo.QueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
      }
export function useAllProductsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllProductsQuery, AllProductsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllProductsQuery, AllProductsQueryVariables>(AllProductsDocument, options);
        }
export type AllProductsQueryHookResult = ReturnType<typeof useAllProductsQuery>;
export type AllProductsLazyQueryHookResult = ReturnType<typeof useAllProductsLazyQuery>;
export type AllProductsQueryResult = Apollo.QueryResult<AllProductsQuery, AllProductsQueryVariables>;
export const CurrentUserDocument = gql`
    query CurrentUser {
  authenticatedItem {
    ... on User {
      id
      email
      name
      cart {
        id
        quantity
        product {
          id
          price
          name
          description
          img
        }
      }
    }
  }
}
    `;
export type CurrentUserProps<TChildProps = {}, TDataName extends string = 'data'> = {
      [key in TDataName]: ApolloReactHoc.DataValue<CurrentUserQuery, CurrentUserQueryVariables>
    } & TChildProps;
export function withCurrentUser<TProps, TChildProps = {}, TDataName extends string = 'data'>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  CurrentUserQuery,
  CurrentUserQueryVariables,
  CurrentUserProps<TChildProps, TDataName>>) {
    return ApolloReactHoc.withQuery<TProps, CurrentUserQuery, CurrentUserQueryVariables, CurrentUserProps<TChildProps, TDataName>>(CurrentUserDocument, {
      alias: 'currentUser',
      ...operationOptions
    });
};

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;