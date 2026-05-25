import { useState } from "react"

const Text = () => {
    const [show, setShow] = useState(false)

    return (
        <div>
            <button onClick={() => setShow(!show)}>
                Toggle
            </button>

            {show && <h2>Прихований текст</h2>}
        </div>
    )
}

export default Text;
// const show = false
// function setShow() {
//     show = !show
// }

// button.addEventListener('click', setShow)