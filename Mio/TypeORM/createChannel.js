const arnConfiguration = async (name) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = { arn: 'alksjdhflkajshdfkas', name: name }
            resolve(data.arn)
        }, 3000);
    })
}
const createChannel = async (config, name) => {
    console.log(config)
    console.log(typeof config)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = { channel: { playback: 'ajslhdfkjas', name: name, }, streamKey: { arn: 'alksdhflkjahsdklfjhaskdjf' } }
            resolve(data)
        }, 3000);
    })
}


module.exports.createMobeusChannel = async (event, context, callback) => {
    console.log("Holis")

    searchIdCategory = "aaa"
    searchIdCategory = "ddd"

    let data = [
        {
            id: 1,
            idCategory: 'aaa',
            idChannel: 'bbb',
        },
        {
            id: 2,
            idCategory: 'aaa',
            idChannel: 'ccc',
        },
        {
            id: 3,
            idCategory: 'bbb',
            idChannel: 'bbb',
        }
    ]

    if (data.find(item => item.idCategory === searchIdCategory) && data.find(item => item.idChannel === searchIdCategory)) {
        console.log("Existe")
    } else {
        console.log("No existe")
    }



}

async function createMobeusChannel() {
    async function createChannel() {
        let resCreateRecording = await createRecondingConfiguration
        return resCreateRecording
        console.log(resCreateRecording)
    }
    let dataRes = await createChannel()

    let paramsChanel = {
        channelname: 'MobeusChannel',
        arn: dataRes.arn
    }

    console.log("Res", paramsChanel)
}