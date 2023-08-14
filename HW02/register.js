function validateForm() {
    const companyName = document.getElementById("companyName").value;
    const contactName = document.getElementById("contactName").value;
    const contactNumber = document.getElementById("contactNumber").value;
    const boothSize = document.getElementById("boothSize").value;
    const numChairs = document.getElementById("numChairs").value;

    if (companyName === "" || contactName === "" || contactNumber === "") {
        alert("กรุณากรอกข้อมูลให้ครบทุกช่อง");
        return false;
    }

    if (boothSize === "") {
        alert("กรุณาเลือกขนาดบูธ");
        return false;
    }

    if (numChairs === "" || numChairs < 1 || numChairs > 10) {
        alert("จำนวนเก้าอี้ต้องเป็นตัวเลขระหว่าง 1 ถึง 10");
        return false;
    }
    return true;
}