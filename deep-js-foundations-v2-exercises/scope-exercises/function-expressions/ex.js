function printRecords(recordIds) {
  let foundRecords = []
  if(recordIds) {
    recordIds.forEach(function fetchFoundRecords(recordId) {
      let matchingRecordById = studentRecords.find(function fetchStudentRecord(studentRecord) {
        return studentRecord.id == recordId;
      });
      foundRecords.push(matchingRecordById)
    });
    
    let sortedFoundRecords = foundRecords.sort(function sortRecords(r1, r2) {
      return r1.name.localeCompare(r2.name)        
    });
    
    sortedFoundRecords.forEach(function displayRecords(studentRecord) {
      console.log(`${studentRecord.name} (${studentRecord.id}) ${studentRecord.paid ? 'Paid': 'Not Paid'}`);
    });
  }
}

function paidStudentsToEnroll() {
  let notPaidStudentArr = []
  let notPaidStudentIdArr = []
  studentRecords.forEach(function fetchPaidAndNotEnrolled(studentRecord) {
    if(studentRecord.paid) {
      if(!currentEnrollment.includes(studentRecord.id)) {
        notPaidStudentArr.push(studentRecord);
        notPaidStudentIdArr.push(studentRecord.id)
      }
    }
  });
  return [...currentEnrollment, ...notPaidStudentIdArr]
}

function remindUnpaid(recordIds) {
  let unpaidStudentRecordsArr = []
  let unpaidStudentRecordIdsArr = []
  recordIds.forEach(function TODO(recordId) {
    let unpaidStudentRecord = studentRecords.find(function fetchStudentRecord(studentRecord) {
      if(studentRecord.id == recordId && !studentRecord.paid) {
        unpaidStudentRecordIdsArr.push(studentRecord.id);
        return studentRecord;
      }
    });
    unpaidStudentRecordsArr.push(unpaidStudentRecord)
  });
  printRecords(unpaidStudentRecordIdsArr)
}


// ********************************

var currentEnrollment = [ 410, 105, 664, 375 ];

var studentRecords = [
	{ id: 313, name: "Frank", paid: true, },
	{ id: 410, name: "Suzy", paid: true, },
	{ id: 709, name: "Brian", paid: false, },
	{ id: 105, name: "Henry", paid: false, },
	{ id: 502, name: "Mary", paid: true, },
	{ id: 664, name: "Bob", paid: false, },
	{ id: 250, name: "Peter", paid: true, },
	{ id: 375, name: "Sarah", paid: true, },
	{ id: 867, name: "Greg", paid: false, },
];

printRecords(currentEnrollment);
console.log("----");
currentEnrollment = paidStudentsToEnroll();
printRecords(currentEnrollment);
console.log("----");
remindUnpaid(currentEnrollment);


function diff(x, y) {
  if(x > y) {
    var temp = x;
    x = y;
    y = temp;
  }
  console.log(temp)
  return y-x;
}

console.log(diff(10,4))



function lookupRecort(searchStr) {
  try {
    var id = 1293
    throw new Error()
  } catch {
    var id = -1;
  }
  return id;
}

console.log(lookupRecort("ab"))


const teacher = ["alexa", "joshi"]
teacher[1] = "Richa"
console.log(teacher)

/*
	Bob (664): Not Paid
	Henry (105): Not Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Frank (313): Paid
	Henry (105): Not Paid
	Mary (502): Paid
	Peter (250): Paid
	Sarah (375): Paid
	Suzy (410): Paid
	----
	Bob (664): Not Paid
	Henry (105): Not Paid
*/
