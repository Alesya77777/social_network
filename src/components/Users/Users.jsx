
import classes from './Users.module.css';

const Users = (props) => {

   if (props.users.length === 0) {
  
     props.setUsers( [
       { id: 1, fullname: "Andrew", location: { country: "Russia", city: "Moscov" }, followed: false, status: "I like football", photo: "https://teleprogramma.pro/wp-content/uploads/2016/03/596a3d04481816330f07e4f97510c28f-1-1024x754.jpg" },
       { id: 2, fullname: "Dmitry", location: { country: "Russia", city: "Rostov-on-Don" }, followed: true, status: "I like jumping", photo: "https://avochka.ru/img/kartinka/1/lis_zveropolice.jpg" },
       { id: 3, fullname: "Sasha", location: { country: "United States", city: "Texas" }, followed: false, status: "I like tennis", photo: "https://cdnimg.rg.ru/i/gallery/93a5d2d1/10_86ad2d85.jpg" },
       { id: 4, fullname: "Sveta", location: { country: "Canada", city: "Vancouver" }, followed: true, status: "I like tennis", photo: "https://www.afisha.uz/ui/materials/2016/03/0881639_b.jpg" },
       { id: 5, fullname: "Valera", location: { country: "Italy", city: "Rome" }, followed: true, status: "I like swimming", photo: "https://sites.google.com/site/zveropolis896/_/rsrc/1459922444261/vse-geroi-multfilma/%D0%BE%D0%BD3.jpg" },
       { id: 6, fullname: "Viktor", location: { country: "China", city: "Beijing" }, followed: false, status: "I like hockey", photo: "https://img.gazeta.ru/files3/217/10588217/Zootopia-pic905-895x505-73183.jpg" },
     ]);
   }





  return (
    <div>{  props.users.map((u) =>
      <div key={u.id} className={classes.wrapper}>
      <div className={classes.user}>
        <img src={u.photo} alt="" />
        {u.followed ? <button onClick={()=> {props.unfollow(u.id)}} type="button">Unfollow</button> : <button onClick={()=>{props.follow(u.id)}} type="button">Follow</button>}
      </div>
      <div className={classes.userInfo}>
        <div className={classes.info}>
          <div className={classes.name}>{u.fullname}</div>
          <div>{u.status}</div>
        </div>
        <div class={classes.address}>
          <div>{u.location.country},</div>
          <div>{u.location.city}</div>
        </div>
      </div>
    </div> )}
      <button className={classes.show}>Show more</button>
    </div>
  )
  
};

export default Users;