
const InfoBox = ({ data }) => {
    return (
        <div className="info-box">
            <h2>event location info</h2>
            <ul>
                <li>ID: {data.id}</li>
                <li>title: {data.title}</li>
            </ul>

        </div>
    )
}

export default InfoBox
