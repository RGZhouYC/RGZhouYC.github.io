const { MongoClient } = require('mongodb');

async function main() {
    /**
     * Connection URI. Update <username>, <password>, and <your-cluster-url> to reflect your cluster.
     * See https://docs.mongodb.com/drivers/node/ for more details
     */
    const uri = "mongodb+srv://Admin:ZYCzyc123@cluster0.lpwi0q8.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(uri);

    try {
        // Connect to the MongoDB cluster
        await client.connect();
        console.log("Connection Established\n");
        await findProject(client, "16-bit CPU");
        // Make the appropriate DB calls

    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }

    async function findProject(client, name){
        const result = await client.db("MyProjects").collection("p1").findOne({project_name: name});
        if (result) {
            console.log(result);
        }
        else {
            console.log("No match");
        }
    }

}

main().catch(console.error);
