
const NotFound = () => {
    return(
        <div style={{
            display: 'flex',
            background: 'white',
            height: '95vh',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }}> 
        <img src="./img/not-found.png" width='550' />
       
        <h3 style={{
        color: '#6C63FF',
        }}> 404 Error | Page Not Found... </h3>
        
        </div>
    )
 }
 export default NotFound