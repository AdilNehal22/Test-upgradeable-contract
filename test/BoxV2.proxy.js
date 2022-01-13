const { expect } = require('chai');
 
let Box;
let BoxV2;
let box;
let boxV2;
 

describe('BoxV2 (proxy)', function () {

    beforeEach(async function () {
        Box = await ethers.getContractFactory("Box");
        BoxV2 = await ethers.getContractFactory("BoxV2");
    
        box = await upgrades.deployProxy(Box, [42], {initializer: 'store'});
        boxV2 = await upgrades.upgradeProxy(box.address, BoxV2);
    });
    

    it('retrieve returns a value previously incremented', async function () {
        await boxV2.increment();
        expect((await boxV2.retrieve()).toString()).to.equal('43');
    });

});