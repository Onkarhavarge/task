//Display the details of employees with Designation="Technical writer"
var rows= document.querySelectorAll('EmployeeTable tbody tr');
rows.forEach(row=>{
    var designationcell=
    row.querySelector('td:nth-child(2)');
    if(designatiocell && designatiocell.textcontent.trim()!=="Technical Writer")
    {
        row.style.display='none';
    }
});
//Display details of employees with salary grater than 5LPA and less than 7LPA
rows.forEach(row=>{
    var salarycell=row.querySelector('td:nth-child(5)');
    if (salarycell){
        var salary=parselnt(salarycell.textcontent);
        if(salary<500000||salary>700000){
            row.style.display='none';
        }
    }
});
//Display only Employee Name,Designation,and date of joining details in Table
rows.forEach(row=>{
    var addresscell=
    row.querySelector('td:nth-child(4)');
    var salarycell=row.querySelector('td:nth-child(5)');
    if(addresscell){
        addresscell.style.display='none';
    }
    if(salarycell){
        salarycell.style.display='none';
    }
});