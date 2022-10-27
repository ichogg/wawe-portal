

const main = async () => {
    const [deployer] = await hre.ethers.getSigners();
    const balance = await deployer.getBalance();

    console.log("Deploying contracts with Account:: ", deployer.address);
    console.log("Account balance:: ", balance);

    const factory = await hre.ethers.getContractFactory("WavePortal");
    const contract = await factory.deploy();
    await contract.deployed();

    console.log("wavePortal Address:: ", contract.address);
}

const run = async () => {
    try {
        await main();
        process.exit(0);
      } catch (error) {
        console.log(error);
        process.exit(1);
      }
}

run();