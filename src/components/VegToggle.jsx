import "../styles/VegToggle.css";
function VegToggle({diet,setDiet})
{
  return(
    <div className="diet-filter">
      <button className={diet==="all"?'active':""} onClick={()=>setDiet('all')}>
        All </button>

        <button className={diet==='veg'?'active':''} onClick={()=>setDiet('veg')}>
          Veg
        </button>

        <button className={diet==='nonveg'?'active':''}
        onClick={()=>setDiet('nonveg')}>
          Non-Veg
        </button>
           </div>
  );
}
export default VegToggle;