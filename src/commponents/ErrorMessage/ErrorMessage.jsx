// eslint-disable-next-line react/prop-types
const ErrorMessage = ({children}) =>{
    return (
        <div style={{
            width: "100%",
            padding: 2,
            marginBottom : 5,
            marginTop : 15,
            borderRadius: 4,
            backgroundColor: "orangered",
            textAlign: "center",
            color: "white",
            textTransform: "capitalize",
            fontSize : 16
        }}>
            {children}
        </div>
    )
}
export default ErrorMessage;