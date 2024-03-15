

export default function FamiliesLogo({fillColor, width, height, ...props }){
    return(
        <div {...props}>
            <svg 
                width={width} 
                height={height} 
                viewBox="0 0 28 28" 
                fill={fillColor} 
                xmlns="http://www.w3.org/2000/svg">
                <path d="M6.99996 22.1667H10.5V15.1667H17.5V22.1667H21V11.6667L14 6.41667L6.99996 11.6667V22.1667ZM4.66663 24.5V10.5L14 3.5L23.3333 10.5V24.5H15.1666V17.5H12.8333V24.5H4.66663Z" fill="#DCFFDF"/>
            </svg>    
        </div>  
    )
}