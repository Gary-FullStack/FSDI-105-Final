function displayUsers(usersArray) {
    let tr = "";
    for (let i = 0; i < usersArray.length; i++) {
        let user = usersArray[i];
        // console.log(user);

        tr = `
        <tr>
            <td>${user.firstName}</td>
            <td>${user.lastName}</td>
            <td>${user.email}</td>
            <td>${user.gender}</td>
            <td>${user.age}</td>
            <td>${user.phone}</td>
            <td>${user.address}</td>
            <td>${user.pay}</td>
            <td>${user.color}</td>
        </tr>`;

        $("#usersTable").append(tr);
    }
}

function init() {
    console.log("Listing users");
    let users = readUsers();
    displayUsers(users);
}

window.onload = init;


