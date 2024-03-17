import DraggableText from './DraggableText'

const dummyTextsArr = ['john.banega.don@hotmail.com', 'Chota Don', '+8801232234324', 'Dhaka, Bangladesh']

export default function DrgaggableTextContainer() {
  return (
    <div className='flex flex-wrap gap-2 p-3 bg-secondary rounded-lg border shadow-sm mt-5'>
      {dummyTextsArr.map(text => (
        <DraggableText key={text} text={text} />
      ))}
    </div>
  )
}
