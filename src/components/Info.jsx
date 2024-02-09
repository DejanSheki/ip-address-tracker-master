const Info = ({ infoData }) => {
    return (
        <section className="flex absolute -top-[10%] z-10 w-[50%] bg-white p-6">
            <article className="w-1/5">
                <h2>IP ADDRESS</h2>
                <p>{infoData.ip}</p>
            </article>
            <article className="w-1/5">
                <h2>LOCATION</h2>
                <p>{infoData.city}, {infoData.country_name}</p>
            </article>
            <article className="w-1/5">
                <h2>TIMEZONE</h2>
                <p>UTC {infoData.utc_offset ? infoData.utc_offset.slice(0, 3) : infoData.utc_offset}:{infoData.utc_offset ? infoData.utc_offset.slice(3) : infoData.utc_offset}</p>
            </article>
            <article className="w-1/5">
                <h2>ISP</h2>
                <p>{infoData.org}</p>
            </article>
        </section>
    );
};

export default Info;