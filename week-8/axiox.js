const axios = require('axios')

async function main()
{
    const response = await axios.get('https://httpdump.app/dumps/9735d9f2-d0c9-4a19-be07-08f8d3e1bc96?a=122',{
        name:"pradeep",
        mail:"prrajpoot@gmail.com"
    },
    {

        headers:{
        Authorization:"Bearer csn"
        }
    })
    console.log(response.data);
    
}
main()