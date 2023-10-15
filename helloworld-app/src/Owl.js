/**owl object */
const owl = {
  title: 'Oscar Khan says Hi!',
  src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
}

//Define function component here:
function Owl(){
    return (
        <div>
            <h2>{owl.title}</h2>
            <img src={owl.src} alt={owl.title}/>
        </div>
    )

}

export default Owl;