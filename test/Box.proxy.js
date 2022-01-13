const { expect } = require('chai');
const { upgrades } = require('hardhat');
 
let Box;
let box;

describe('Box (proxy)', function(){

    this.beforeEach(async function(){
        Box = await ethers.getContractFactory("Box");
        box = await upgrades.deployProxy(Box, [42], {initializer : 'store'});
    });

    it('retrieves the previously return value', async function(){
        expect((await box.retrieve()).toString()).to.equal('42');
    });
});