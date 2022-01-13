const { expect } = require('chai');

let Box;
let box;

describe('Box', ()=>{

    beforeEach(async function(){
        Box = await ethers.getContractFactory("Box");
        box = await Box.deploy();
        await box.deployed();
    });

    it('retrives a value previously stored', async ()=>{
        await box.store(42);
        expect((await box.retrieve()).toString()).to.equal('42');
    });
});