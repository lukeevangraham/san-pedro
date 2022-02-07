const Embed = ({ data }) => (
    <section>

        <div className="row">
            <div style={{ margin: 'auto', textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: data.embedCode }} />
        </div>
    </section>
)

export default Embed;