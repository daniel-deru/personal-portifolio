import React from 'react'

const Resume = () => {

    const styles = {
        marginTop: "7em",
        position: "absolute",
        width: "100%",
        overflowy: "hidden"
    }
    return (
        <div style={styles}>
            <embed src="danielcv.pdf" width="100%" height="600px"></embed>
        </div>
    )
}

export default Resume
