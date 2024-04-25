import Tag from "../Tag/Tag"

export default function Card(props) {
    const item = props.item

    console.log(item)

    return (
        <div className="card">
            <h2>{item.name}</h2>

            <div className='tags'>
                {item.tags.map(function(tag){
                    return <Tag text={tag} />
                })}
                <Tag text='Status: Vivo'/>
                <Tag text='Espécie: Humana'/>
                <Tag text='Origem: Terra c-137'/>
            </div>
            
            <img src={item.image} />
        </div>
  )
}