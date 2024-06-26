export class CryptoApi{
    static async fetchBitcoin() : Promise<CryptoItem> {
        const cryptoResp:CryptoResponse = await (await fetch(`${process.env.NEXT_PUBLIC_CRYPTO_BASE_URL}/assets/bitcoin`)).json()
        // With simulated delay response
        // return delayResponse(cryptoResp.data,4000)
        return cryptoResp.data
    }
}