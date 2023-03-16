// import axios from 'axios';
import React,{useState} from 'react';

const Profile = () => {
	const [data, SetData] = useState({
		name: "",
		email:"",
		address: "",
		age: "",
		section:""
	})

	const handleData = (e) => {
		// e.preventDefault();
		 const { name, value } = e.target;
		SetData(() => {
			return {
				...data,
				[name]: value,
			};
		});
	}

	// const useEffect =() => {
	// 	axios.post(`https://63314104cff0e7bf70e8fdfb.mockapi.io/students`)
	// }

	return (
		<div className='container'>
			<div className='row'>
				<div className='col-lg-12 col-md-12 col-sm-12'>
					<div className='d-flex justify-content-center py-5'>
						<form onSubmit={''}>
							<label>User Name
								<input type="text"
									placeholder='userName'
									name="name"
									value={data.name}
									onChange={(e)=>handleData(e.target.value)}
								/>
							</label>
							<label>Email 
								<input type="text"
									placeholder='UserEmail'
									name="email"
									value=""
									onChange={(e)=>handleData(e.target.value)}
								/>
							</label>
							<label>Age 
								<input type="number"
									placeholder='Age'
									name="age"
									// value={""}
									onChange={(e)=>handleData(e.target.value)}
								/>
							</label>
							<input type="submit" onClick={''}/>
						</form>
					</div>
				</div>
			</div>
			<div>
				{/* <div>
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</div> */}	
				{/* <style>
					div {
						display: flex;
						flex-flow: row nowrap;
						align-items: center;
						justify-content: space-between;
						width: 2em;
						}

						span {
						width: 0.3em;
						height: 1em;
						background-color: #3cefff;
						}

						span:nth-of-type(1) {
						animation: grow 1s -0.45s ease-in-out infinite;
						}

						span:nth-of-type(2) {
						animation: grow 1s -0.3s ease-in-out infinite;
						}

						span:nth-of-type(3) {
						animation: grow 1s -0.15s ease-in-out infinite;
						}

						span:nth-of-type(4) {
						animation: grow 1s ease-in-out infinite;
						}

						@keyframes grow {
						0%,
						100% {
							transform: scaleY(1);
						}

						50% {
							transform: scaleY(2);
						}
						}
				</style> */}
			</div>
		</div>
	);
};

export default Profile;
