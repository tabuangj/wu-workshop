# WU Workshop Employee API

**โปรเจกต์นี้เหมาะสำหรับมือใหม่ Node.js ที่ต้องการฝึกสร้าง REST API ด้วย Express และ Axios**  
**สิ่งสำคัญที่สุดคือการติดตั้ง Git, การติดตั้งโปรแกรมเสริม และการรันโปรแกรมให้สำเร็จ!**

## ขั้นตอนสำคัญในการเริ่มต้นใช้งาน

### 1. ติดตั้ง Git

Git คือเครื่องมือสำหรับดาวน์โหลดและจัดการโปรเจกต์จาก GitHub  
**หากยังไม่มี Git ให้ติดตั้งก่อน**  
- [ดาวน์โหลด Git](https://git-scm.com/downloads) และติดตั้งตามขั้นตอน

### 2. ดาวน์โหลดโปรเจกต์ด้วย Git
เปิด Terminal หรือ Command Prompt แล้วรันคำสั่งนี้:

```bash
git clone https://github.com/tabuangj/wu-workshop.git
cd wu-workshop
```

### 3. ติดตั้ง Node.js และ npm

- [ดาวน์โหลด Node.js](https://nodejs.org/) (npm จะติดตั้งมาพร้อมกัน)

### 4. ติดตั้งโปรแกรมเสริม (Dependencies)

ในโฟลเดอร์โปรเจกต์ รันคำสั่งนี้:

```bash
npm install express axios
```

### 5. รันโปรแกรม

เปิดเซิร์ฟเวอร์ด้วยคำสั่ง:

```bash
node index.js
```

**หากทำครบทุกขั้นตอนนี้ คุณจะสามารถใช้งาน API ได้ทันที!**

---

## สรุปฟีเจอร์

- ดึงข้อมูลพนักงานจาก Mock API และแสดงในตาราง HTML
- เพิ่มข้อมูลพนักงานใหม่ผ่าน HTTP POST
- ใช้ Express สร้างเซิร์ฟเวอร์และจัดการเส้นทาง
- ใช้ Axios สำหรับเรียกข้อมูลจาก API

## API Endpoints

- **GET `/`** : แสดงข้อมูลพนักงานทั้งหมดในตาราง HTML
- **POST `/employee`** : เพิ่มข้อมูลพนักงานใหม่

## หมายเหตุ

- Mock API ที่ใช้: `https://6892d299c49d24bce8686a32.mockapi.io/api/v1/employee`
- โปรเจกต์นี้ใช้เพื่อการศึกษา Node.js สำหรับมือใหม่

---

WU Workshop Employee API  
สร้างด้วย Express และ Axios  
**ขอให้สนุกกับการเรียนรู้ Node.js!**
