import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'


const Header = () => {
    return (
        <div className="header">
            <h1><Icon icon={locationIcon} /> wildfire tracker (powerd by nasa)</h1>
        </div>
    )
}

export default Header
