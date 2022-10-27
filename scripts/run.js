const { hexStripZeros } = require("ethers/lib/utils")


const main = async () => {

    const [owner, random_person] = await hre.ethers.getSigners()
    const contractFactory = await hre.ethers.getContractFactory("WavePortal");
    const contract = await contractFactory.deploy();
    await contract.deployed();

    console.log("Contract deployed to: ", contract.address);
    console.log("Contract deployed by: ", owner.address);

    await contract.getTotalWaves();

    const tx = await contract.wave();
    await tx.wait();

    await contract.getTotalWaves();

    const tx_2 = await contract.connect(random_person).wave();
    await tx_2.wait();

    await contract.getTotalWaves();
}

const run = async () => {
    try {
        await main();
        process.exit(0);
    } catch (error) {
        console.log("an error occured:: ", error);
        process.exit(1);
    }
}

run();