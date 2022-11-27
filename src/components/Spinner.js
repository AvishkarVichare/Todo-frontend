import {  Dna } from  'react-loader-spinner'

const Spinner = ({isLoading})=>{
    return(
        <Dna
  visible={isLoading}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/>
    )
}

export default Spinner