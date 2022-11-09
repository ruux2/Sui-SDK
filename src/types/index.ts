export type Pool = {
    pool_addr: string,
    pool_type: string,
    coin_x_type?: string,
    coin_y_type?: string,
}

export type PoolInfo = {
    object_id:string
    global: string,
    coin_x: bigint,
    coin_y: bigint,
    fee_coin_y: bigint,
    fee_coin_x: bigint,
    lp_type: string,
    lp_supply: bigint
};

export type TxPayloadCallFunction = {
    packageObjectId: string;
    module: string;
    function: string;
    typeArguments: string[];
    arguments: string[];
    gasBudget: number;
  };