//input box,button, create form
import "./WriteContract.css"
const WriteContract = ({state})=>{
    const {contract,web3} = state;

    const writeData =async(e)=>{
        e.preventDefault()
        const data = document.querySelector("#data").value;
        const accounts =await web3.eth.getAccounts()
        
         await contract.methods.store(data).send({from:accounts[0]})
         console.log("data updated")

    }


    return(
        <>
        <form onSubmit={writeData}>
            <label htmlFor="writeData"> Write Data</label>
            <input id="data" />
            <button>submit</button>
        </form>
        </>
    )
}
export default WriteContract