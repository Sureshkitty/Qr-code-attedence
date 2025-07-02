
const students = [
  { usn: "SG23CSD001", name: "ADITYA", father_name: "SHIVAKUMAR" },
  { usn: "SG23CSD002", name: "AJEET", father_name: "IRANNA SHOPPER" },
  { usn: "SG23CSD003", name: "AMBRESH", father_name: "SHIVARAM" },
  { usn: "SG23CSD004", name: "AMIT KUMAR", father_name: "SHIVAGUNDAPPA" },
  { usn: "SG23CSD005", name: "ARPIT", father_name: "GOPAL" },
  { usn: "SG23CSD006", name: "ASHWINI", father_name: "BASAVANTRAYA" },
  { usn: "SG23CSD007", name: "BHAGYASHREE", father_name: "ANNARAO" },
  { usn: "SG23CSD008", name: "BHAVANI", father_name: "GURUBASAYA" },
  { usn: "SG23CSD009", name: "BHAVANI PATIL", father_name: "SHARANABASAPPA" },
  { usn: "SG23CSD010", name: "BHIMANNAGOUDA A BIRADAR", father_name: "AMRUTH BIRADAR" },
  { usn: "SG23CSD011", name: "CHETANA", father_name: "YESHWANTHRAO PATIL" },
  { usn: "SG23CSD012", name: "GIRISH", father_name: "GOPALKRISHNA S PRABHU" },
  { usn: "SG23CSD013", name: "GURUMURTHY", father_name: "SOMSHEKHAR" },
  { usn: "SG23CSD014", name: "GURURAJ MASALI", father_name: "MAHANTESH MASALI" },
  { usn: "SG23CSD015", name: "HARSHITA KATTI", father_name: "KATTI DAY" },
  { usn: "SG23CSD016", name: "KEDARNATH", father_name: "RAJENDRA MULAGE" },
  { usn: "SG23CSD017", name: "KOMAL N MENGJI", father_name: "NARASING C MENGJI" },
  { usn: "SG23CSD018", name: "KUNAL S", father_name: "BLEED" },
  { usn: "SG23CSD019", name: "MAHANTESH", father_name: "GIREPPA SIBARBANDI" },
  { usn: "SG23CSD020", name: "MALLIKARJUN", father_name: "VIRUPAKSHAPPA" },
  { usn: "SG23CSD021", name: "MANASVI S KOANGUTTI", father_name: "SHANTKUMAR" },
  { usn: "SG23CSD022", name: "MD TOUFIQ PATEL", father_name: "KHASIM PATEL" },
  { usn: "SG23CSD023", name: "MD UNED IMRAN", father_name: "ABDUL AZIZ SAB" },
  { usn: "SG23CSD024", name: "POOJA", father_name: "CHANDRAKAΝΤΗ" },
  { usn: "SG23CSD025", name: "POOJA", father_name: "PRAMOD KUMAR HIBARE" },
  { usn: "SG23CSD026", name: "POOJA", father_name: "SIDRAMAPPA YANAGUNTI" },
  { usn: "SG23CSD027", name: "PRAKASH", father_name: "ANNAPPA" },
  { usn: "SG23CSD028", name: "RAGHAVENDRA", father_name: "ANANDKUMAR SHAHAPURKAR" },
  { usn: "SG23CSD029", name: "RAJESH", father_name: "BASAVARAJ" },
  { usn: "SG23CSD030", name: "RAMLING REDDY", father_name: "LAXMIKANTH REDDY" },
  { usn: "SG23CSD031", name: "ROHIT", father_name: "RAMESH GUTTEDAR" },
  { usn: "SG23CSD032", name: "SAHANA", father_name: "SHAM RAO GOWD" },
  { usn: "SG23CSD033", name: "SANGAMESH", father_name: "PRAKASH MAROOR" },
  { usn: "SG23CSD034", name: "SANGANGOUDA B PATIL", father_name: "BABUGOUDA PATIL" },
  { usn: "SG23CSD035", name: "SANJANA", father_name: "MALLAPPA" },
  { usn: "SG23CSD036", name: "SAYYAD ZAIDPASHA", father_name: "SAYYAD CHANDPASHA" },
  { usn: "SG23CSD037", name: "SHARANPRAKASH PATIL", father_name: "MALLINATH PATIL" },
  { usn: "SG23CSD038", name: "SHARANU", father_name: "SHREEMANTA" },
  { usn: "SG23CSD039", name: "SHILPA SIDDAPPA KUDAVAKKALAGI", father_name: "SIDDAPPA KALLAPPA KUDAVAKKA" },
  { usn: "SG23CSD040", name: "SHIVANGOUDA", father_name: "Mallikarjun maliipatil" },
  { usn: "SG23CSD041", name: "SHIVANNAGOWDA", father_name: "GOUDAPPA GOUDA POLICE PATIL" },
  { usn: "SG23CSD042", name: "SHRADHA PATIL", father_name: "RAVINDRA PATIL" },
  { usn: "SG23CSD043", name: "SIDDESHWAR", father_name: "BASAYYA" },
  { usn: "SG23CSD044", name: "SNEHA", father_name: "SOMASHEKAR" },
  { usn: "SG23CSD045", name: "SOHAN KALASKAR", father_name: "ARUN KALASKAR" },
  { usn: "SG23CSD046", name: "SONAJIRAO", father_name: "SHRAVANKUMAR" },
  { usn: "SG23CSD047", name: "SUHASINI", father_name: "HANAMANT" },
  { usn: "SG23CSD048", name: "SUMEETKUMAR JANGIR", father_name: "MAHENDRAKUMAR JANGIR" },
  { usn: "SG23CSD049", name: "SUPRIYA G HIREMATH", father_name: "GURULINGAYYA SWAMY HIREMAT" },
  { usn: "SG23CSD050", name: "SURAJ PATIL", father_name: "SHANKARGOUDA MALIPATIL" },
  { usn: "SG23CSD051", name: "SWAYAM S PURANIK", father_name: "SANGAYYA S PURANIK" },
  { usn: "SG23CSD052", name: "VAIBHAV", father_name: "DAYANAND G HANJAGIMATH" },
  { usn: "SG23CSD053", name: "VAIBHAV S DHATTI", father_name: "SHIVKUMAR" },
  { usn: "SG23CSD054", name: "VAIBHAVI S DODDAMANI", father_name: "SURYAKANTS D" },
  { usn: "SG23CSD055", name: "VEDIKA CHOWDHARY", father_name: "PRAKASH CHOWDHARY" },
  { usn: "SG23CSD056", name: "VEERESH", father_name: "SHARANABASAPPA" },
  { usn: "SG23CSD057", name: "VISHWA S KARIKAL", father_name: "SHIVARUDRAPPAT KARIKAL" },
  { usn: "SG23CSD058", name: "YAZDAN MUSHRAF BAIG", father_name: "CHAND BAIG" },
  { usn: "SG23CSD059", name: "YOGESH", father_name: "SHIVARAJ SAGUMALE" },
  { usn: "SG23CSD060", name: "ZYED AZAM", father_name: "MUKARAM MOIUDDIN" }
];

document.getElementById('manual-entry-btn').addEventListener('click', () => {
  const usn = prompt("Enter the student's USN:").trim().toUpperCase();

  if (!usn) {
    showOverlay("USN input was empty.", "#e74c3c", "⚠️");
    return;
  }

  const student = students.find(s => s.usn === usn);
  if (!student) {
    showOverlay(`No student found with USN ${usn}`, "#e74c3c", "❌");
    return;
  }

  if (attendance.has(usn)) {
    showOverlay(`${student.name} already marked present`, "#f39c12", "⚠️");
  } else {
    attendance.set(usn, student);
    updateAttendanceList();
    updateChart();
    saveAttendance();
    showOverlay(`${student.name} marked present manually`, "#2ecc71", "✅");
  }
});


const statusEl = document.getElementById("status");
const attendanceListEl = document.getElementById("attendance-list");
const absentListEl = document.getElementById("absent-list");
const overlayEl = document.getElementById("overlay");
const presentCountEl = document.getElementById("present-count");
const absentCountEl = document.getElementById("absent-count");
const classInfoEl = document.getElementById("class-info");
const subjectInfoEl = document.getElementById("subject-info");


const selectedClass = localStorage.getItem('selectedClass');
const selectedSubject = localStorage.getItem('selectedSubject');
classInfoEl.textContent = selectedClass || 'N/A';
subjectInfoEl.textContent = selectedSubject || 'N/A';


const attendance = new Map();


function loadAttendance() {
  const saved = localStorage.getItem("attendance");
  if (saved) {
    const parsed = new Map(JSON.parse(saved));
    parsed.forEach((value, key) => attendance.set(key, value));
    updateAttendanceList();
    updateChart();
  }
}


function saveAttendance() {
  localStorage.setItem("attendance", JSON.stringify([...attendance]));
}


function updateAttendanceList() {
  attendanceListEl.innerHTML = "";
  absentListEl.innerHTML = "";

  let presentCount = 0;
  let absentCount = 0;

  students.forEach(student => {
    if (attendance.has(student.usn)) {
      const li = document.createElement("li");
      li.textContent = `✅ ${student.usn} - ${student.name} (Father: ${student.father_name})`;
      attendanceListEl.appendChild(li);
      presentCount++;
    } else {
      const li = document.createElement("li");
      li.textContent = `❌ ${student.usn} - ${student.name}`;
      absentListEl.appendChild(li);
      absentCount++;
    }
  });

  presentCountEl.textContent = presentCount;
  absentCountEl.textContent = absentCount;
}


function showOverlay(message, color = "#27ae60", emoji = "✅") {
  overlayEl.textContent = `${emoji} ${message}`;
  overlayEl.style.backgroundColor = color;
  overlayEl.classList.remove("hidden");
  overlayEl.classList.add("show");
  setTimeout(() => {
    overlayEl.classList.remove("show");
    overlayEl.classList.add("hidden");
  }, 3000);
}


function onScanSuccess(decodedText) {
  let studentData;

  try {
    studentData = JSON.parse(decodedText);
  } catch {
    statusEl.textContent = "❌ Invalid QR code format.";
    statusEl.style.color = "red";
    showOverlay("Invalid QR format", "#e74c3c", "❌");
    return;
  }

  if (!studentData.usn) {
    statusEl.textContent = "❌ QR code missing USN.";
    statusEl.style.color = "red";
    showOverlay("Missing USN", "#e74c3c", "❌");
    return;
  }

  const student = students.find(s => s.usn === studentData.usn);

  if (!student) {
    statusEl.textContent = `❌ No student found with USN: ${studentData.usn}`;
    statusEl.style.color = "red";
    showOverlay("Student not found", "#e74c3c", "❌");
    return;
  }

  if (attendance.has(student.usn)) {
    statusEl.textContent = `⚠️ ${student.name} is already marked present.`;
    statusEl.style.color = "orange";
    showOverlay(`${student.name} already marked`, "#f39c12", "⚠️");
  } else {
    attendance.set(student.usn, student);
    statusEl.textContent = `✅ Marked present: ${student.name}`;
    statusEl.style.color = "green";
    updateAttendanceList();
    updateChart();
    saveAttendance();
    showOverlay(`${student.name} marked present!`, "#27ae60", "✅");
  }
}


document.addEventListener("DOMContentLoaded", () => {
  const html5QrCode = new Html5Qrcode("reader");

  html5QrCode
    .start(
      { facingMode: "environment" },
      { fps: 10, qrbox: 250 },
      onScanSuccess
    )
    .catch(err => {
      console.error("Camera error:", err);
      let msg = "Unknown error";
      if (err.name === "NotAllowedError") msg = "Camera access denied";
      else if (err.name === "NotFoundError") msg = "No camera found";
      else msg = err.message;
      statusEl.textContent = `❌ ${msg}`;
      showOverlay(msg, "#e74c3c", "❌");
    });
});

const ctx = document.getElementById("attendanceChart").getContext("2d");

const attendanceChart = new Chart(ctx, {
  type: "pie",
  data: {
    labels: ["Present", "Absent"],
    datasets: [{
      label: "Attendance",
      data: [0, 0],
      backgroundColor: ["#2ecc71", "#e74c3c"],
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#000000" } 
      }
    }
  }
});

function updateChart() {
  attendanceChart.data.datasets[0].data = [
    attendance.size,
    students.length - attendance.size
  ];
  attendanceChart.update();
}


document.getElementById('reset-btn').addEventListener('click', () => {
  attendance.clear();
  localStorage.removeItem("attendance");
  updateAttendanceList();
  updateChart();
  showOverlay("Attendance reset", "#3498db", "🔄");
});


document.getElementById('download-btn').addEventListener('click', () => {
  const now = new Date();
  const dateTimeStr = now.toLocaleString('en-IN', {
    year: 'numeric', month: 'short', day: '2-digit',
    hour: '2-digit', minute: '2-digit', second: '2-digit',
    hour12: false
  });


  const headerInfo = [
    [`Class:`, selectedClass || 'N/A'],
    [`Subject:`, selectedSubject || 'N/A'],
    [`Date & Time:`, dateTimeStr],
    [] 
  ];


  const rows = [["USN", "Name", "Father Name", "Status"]];


  students.forEach(s => {
    const status = attendance.has(s.usn) ? "Present" : "Absent";
    rows.push([s.usn, s.name, s.father_name, status]);
  });


  const csvContent = [...headerInfo, ...rows]
    .map(e => e.join(","))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `attendance_${now.toISOString().split("T")[0]}.csv`;
  a.click();
  URL.revokeObjectURL(url);

  showOverlay("CSV file downloaded.", "#2ecc71", "📄");
});


function updateClock() {
  const now = new Date();
  const formatted = now.toLocaleString('en-IN', {
    weekday: 'short',
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });
  document.getElementById("datetime").textContent = formatted;
}
setInterval(updateClock, 1000);
updateClock();


loadAttendance();


  function updateFancyClock() {
      const now = new Date();
      const day = now.toLocaleDateString(undefined, { weekday: 'long' });
      const date = now.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
      const time = now.toLocaleTimeString(undefined, { hour: '2-digit', minute: '2-digit', second: '2-digit' });
      document.getElementById('datetime').textContent = `${day}, ${date} | ${time}`;
    }
    setInterval(updateFancyClock, 1000);
    updateFancyClock();

    document.getElementById('lost-qr-btn').addEventListener('click', () => {
 
  const usnList = students.map(s => s.usn).join('\n');
  const usnInput = prompt(`Enter USN to view QR code:\nAvailable USNs:\n${usnList}`);

  if (!usnInput) {
    showOverlay("No USN entered.", "#e74c3c", "⚠️");
    return;
  }

  const usn = usnInput.trim().toUpperCase();
  const student = students.find(s => s.usn === usn);

  if (!student) {
    showOverlay(`No student found with USN: ${usn}`, "#e74c3c", "❌");
    return;
  }


  const imgPath = `data/id-images/ID_Card_${usn}.png`;

  const lostQrDisplay = document.getElementById('lost-qr-display');
  lostQrDisplay.innerHTML = `
    <p><strong>${student.name} (${usn})</strong></p>
    <img src="${imgPath}" alt="QR Code for ${usn}" style="max-width:300px; border:1px solid #ccc;"/>
    <br/>
    <a href="${imgPath}" download="ID_Card_${usn}.png">Download QR Code</a>
  `;
});
