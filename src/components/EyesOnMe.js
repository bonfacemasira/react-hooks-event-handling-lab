// Code EyesOnMe Component Here
export default function EyesOnMe() {

        function hanldeFocus(event) {
            console.log('Good!')
        }

        function handleBlur(event) {
            console.log('Hey! Eyes on me!')
        }

    return (
        <div>
            <button onFocus={hanldeFocus} onBlur={handleBlur}>Eyes on me</button>
        </div>
    )
}