'use strict'


const container = document.getElementById('container');
container.setAttribute('class', 'table-row');

const dataBase = [
    { "id": 1, "firstName": "Hewe", "lastName": "Cuppitt", "email": "hcuppitt0@squidoo.com", "gender": "Polygender" },
    { "id": 2, "firstName": "Barbara", "lastName": "Lamartine", "email": "blamartine1@bloglovin.com", "gender": "Non-binary" },
    { "id": 3, "firstName": "Kiley", "lastName": "Balmer", "email": "kbalmer2@globo.com", "gender": "Female" },
    { "id": 4, "firstName": "Caron", "lastName": "Rattenbury", "email": "crattenbury3@auda.org.au", "gender": "Female" },
    { "id": 5, "firstName": "Merrill", "lastName": "Scrimgeour", "email": "mscrimgeour4@discuz.net", "gender": "Bigender" },
    { "id": 6, "firstName": "Franchot", "lastName": "de Zamora", "email": "fdezamora5@mayoclinic.com", "gender": "Genderqueer" },
    { "id": 7, "firstName": "Madonna", "lastName": "Forrington", "email": "mforrington6@cnbc.com", "gender": "Female" },
    { "id": 8, "firstName": "Delores", "lastName": "Wedderburn", "email": "dwedderburn7@aboutads.info", "gender": "Female" },
    { "id": 9, "firstName": "Jacquie", "lastName": "Dudman", "email": "jdudman8@google.de", "gender": "Female" },
    { "id": 10, "firstName": "Mayer", "lastName": "Blythe", "email": "mblythe9@census.gov", "gender": "Male" },
    { "id": 11, "firstName": "Teirtza", "lastName": "Menhci", "email": "tmenhcia@google.com.au", "gender": "Female" },
    { "id": 12, "firstName": "Cristian", "lastName": "Alves", "email": "calvesb@ifeng.com", "gender": "Male" },
    { "id": 13, "firstName": "Anderson", "lastName": "Widdowson", "email": "awiddowsonc@yale.edu", "gender": "Male" },
    { "id": 1, "firstName": "Hewe", "lastName": "Cuppitt", "email": "hcuppitt0@squidoo.com", "gender": "Polygender" },
    { "id": 2, "firstName": "Barbara", "lastName": "Lamartine", "email": "blamartine1@bloglovin.com", "gender": "Non-binary" },
    { "id": 3, "firstName": "Kiley", "lastName": "Balmer", "email": "kbalmer2@globo.com", "gender": "Female" },
    { "id": 4, "firstName": "Caron", "lastName": "Rattenbury", "email": "crattenbury3@auda.org.au", "gender": "Female" },
    { "id": 5, "firstName": "Merrill", "lastName": "Scrimgeour", "email": "mscrimgeour4@discuz.net", "gender": "Bigender" },
    { "id": 6, "firstName": "Franchot", "lastName": "de Zamora", "email": "fdezamora5@mayoclinic.com", "gender": "Genderqueer" },
    { "id": 7, "firstName": "Madonna", "lastName": "Forrington", "email": "mforrington6@cnbc.com", "gender": "Female" },
    { "id": 8, "firstName": "Delores", "lastName": "Wedderburn", "email": "dwedderburn7@aboutads.info", "gender": "Female" },
    { "id": 9, "firstName": "Jacquie", "lastName": "Dudman", "email": "jdudman8@google.de", "gender": "Female" },
    { "id": 10, "firstName": "Mayer", "lastName": "Blythe", "email": "mblythe9@census.gov", "gender": "Male" },
    { "id": 11, "firstName": "Teirtza", "lastName": "Menhci", "email": "tmenhcia@google.com.au", "gender": "Female" },
    { "id": 12, "firstName": "Cristian", "lastName": "Alves", "email": "calvesb@ifeng.com", "gender": "Male" },
    { "id": 13, "firstName": "Anderson", "lastName": "Widdowson", "email": "awiddowsonc@yale.edu", "gender": "Male" }];


const populate = () => {
    container.innerHTML = '';
    dataBase.forEach(element => {
        const row = document.createElement('tr');
        container.append(row)
        const cellId = document.createElement('td');
        const cellFName = document.createElement('td');
        const cellLName = document.createElement('td');
        const cellEmail = document.createElement('td');
        const cellGender = document.createElement('td');
        row.append(cellId, cellFName, cellLName, cellEmail, cellGender);
        cellId.textContent = element.id;
        cellFName.textContent = element.firstName;
        cellLName.textContent = element.lastName;
        cellEmail.textContent = element.email;
        cellGender.textContent = element.gender;

    });
}
populate();

