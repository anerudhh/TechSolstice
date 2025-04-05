class Blockchain {
    constructor() {
        // Create a chain with an initial "genesis" block
        this.chain = [];
        this.createGenesisBlock();
    }

    // Create the first block in the chain
    createGenesisBlock() {
        this.addBlock({
            userId: null,
            trustScore: 0,
            action: "Genesis Block",
            timestamp: Date.now(),
        });
    }

    // Add a new block to the blockchain
    addBlock(data) {
        const newBlock = {
            userId: data.userId,
            trustScore: data.trustScore,
            action: data.action,
            timestamp: data.timestamp,
            previousHash: this.chain.length ? this.chain[this.chain.length - 1].hash : null,
            hash: this.calculateHash(data),
        };
        this.chain.push(newBlock);
    }

    // Calculate the hash for a block (using a simple combination of data for simulation)
    calculateHash(block) {
        return `${block.userId}${block.trustScore}${block.action}${block.timestamp}${block.previousHash}`.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    }

    // Get the last block from the chain
    getLatestBlock() {
        return this.chain[this.chain.length - 1];
    }
}

module.exports = new Blockchain();
