const Info = ({ infoData }) => {
    return (
        <section className="absolute top-1/4 z-10">
            <article>
                <h2>IP ADDRESS</h2>
                <p>{infoData.ip}</p>
            </article>
            <article>
                <h2>LOCATION</h2>
                <p>{infoData.city}, {infoData.country_name}</p>
            </article>
            <article>
                <h2>TIMEZONE</h2>
                <p>UTC {infoData.utc_offset ? infoData.utc_offset.slice(0, 3) : infoData.utc_offset}:{infoData.utc_offset ? infoData.utc_offset.slice(3) : infoData.utc_offset}</p>
            </article>
            <article>
                <h2>ISP</h2>
                <p>{infoData.org}</p>
            </article>
        </section>
    );
};

export default Info;