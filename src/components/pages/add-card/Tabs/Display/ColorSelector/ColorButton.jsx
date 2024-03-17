export function ColorButton({ color, outline, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      className='size-5 rounded-full'
      style={{ backgroundColor: color, outline: `${selected ? `4px solid ${outline}` : 'none'}` }}
    />
  )
}
