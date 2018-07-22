const Token = artifacts.require("./Token.sol")

contract('Token.buy()', accounts => {
  const owner = accounts[0]

  it("should buy new tokens.", async () => {
    const token = await Token.new({ from: owner })
    let value = 100

    const callResponse = await token.buy.call({ from: owner, value })
    const txResponse = await token.buy({ from: owner, value })

    // Assert after tx so we can see the emitted logs in the case of failure.
    assert(callResponse, 'Call response was not true.')

    const rate = await token.rate()
    const tokenAmount = value * rate

    // Event emission
    const event = txResponse.logs[0]
    assert.equal(event.event, 'TokensMinted', 'TokensMinted event was not emitted.')
    assert.equal(event.args.to, owner, 'Incorrect to was emitted.')
    assert.equal(event.args.value, value, 'Incorrect value was emitted.')
    assert.equal(event.args.totalSupply.toNumber(), tokenAmount, 'Incorrect totalSupply was emitted.')

    // Balance
    const balance = await token.balanceOf(owner)
    assert.equal(balance.toNumber(), tokenAmount, 'Incorrect token balance.')

    // Total Supply
    const supply = await token.totalSupply()
    assert.equal(supply.toNumber(), tokenAmount, 'Incorrect total supply balance.')
  })

  /**
   * Add further test cases below
   */
})
