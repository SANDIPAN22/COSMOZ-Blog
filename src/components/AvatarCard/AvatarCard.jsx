
const AvatarCard = async({createdAt, authorEmail}) => {
    // const user = await getUser(authorEmail)
    // using Next Api 
    const resp = await fetch(`http://127.0.0.1:3000/api/user/${authorEmail}`)
    const user = await resp.json()

    return ( 
        <>
         <img src={user.avatar || 'https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0='} className="rounded-circle mb-3" style={{"width": "150px"}}
  alt="Avatar" />

<h5 class="mb-2"><strong>{user.username}</strong> {user.isAdmin && <span className="badge bg-primary">Admin</span>}</h5>
<p class="text-muted"> at {String(createdAt).slice(0,34)} </p>
        
        </>
     );
}
 
export default AvatarCard;