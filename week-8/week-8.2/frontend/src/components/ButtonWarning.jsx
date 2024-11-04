import {Link} from 'react-router-dom'

export function ButtonWarning({label,buttonText, to})
{
    return <div className="text-gray-500 flex justify-center">
       <div>
        {label}
       </div>
       <Link className="pointer underline pl-1 cursor-pointer" to={to}>
        {buttonText}
       </Link>

    </div>
}