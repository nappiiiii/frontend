import Layout from "../components/layout";
import cafeBackgroundImage from "../assets/images/books.jpg";
import ajPanwitImage from "../assets/images/aj-panwit.jpg";
import coffeeImage from "../assets/images/coffee.jpg";
import thisisme from "../assets/images/thisisme.jpg";

export default function HomePage() {
  return (
    <Layout>
      <section
        className="h-[500px] w-full text-white bg-pink-800 bg-cover bg-blend-multiply flex flex-col justify-center items-center px-4 text-center"
        style={{
          backgroundImage: `url(${cafeBackgroundImage})`,
        }}
      >
        <h1 className="text-5xl mb-2">ยินดีต้อนรับสู่ IoT Library & Cafe</h1>
        <h2>ร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน (แถมยาระบายอ่อน ๆ)</h2>
      </section>

      <section className="container mx-auto py-8">
        <h1>About us</h1>

        <div className="grid grid-cols-3 gap-4">
          <p className="text-left col-span-2">
            IoT Library & Cafe เป็นร้านกาแฟที่มีหนังสืออยู่นิดหน่อยให้คุณได้อ่าน
            และเรียนรู้เรื่องใหม่ๆ ที่เกี่ยวกับเทคโนโลยี IoT โดยคาเฟ่ของเรานั้น ก่อตั้งขึ้นโดย
            ผศ.ดร. ปานวิทย์ ธุวะนุติ ซึ่งเป็นอาจารย์ในวิชา Internet of Things และนายกฤตณัฏฐ์
            ศิริพรนพคุณ เป็นผู้ช่วยสอนในหัวข้อ FastAPI และ React ในวิชานี้
          </p>

          <div>
            <img src={ajPanwitImage} alt="Panwit Tuwanut" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="container mx-auto py-8">
        <h1>พนักงานประจำสาขา</h1>
        <h3>สาขา การลละคร (แกล้งป่วยเพื่ออู้งาน)</h3>

        <div className="grid grid-cols-3 gap-4">
          <p className="col-span-2 text-left">

            This is me วัดบ่เข้า เหล้าบ่ขาด บาทบ่ใส่ เพราะว่า i wake up ไม่ทัน สวัสดีค่ะคุณลูกค้า อยากทราบชื่อจริงเล่น ๆ หรือ ชื่อเล่นจริง ๆ คะ
            เรียนคุณลูกค้าที่เคารพ ดิฉัน สายลับรัสเซียเขต 11 รหัสประจำตัว 65070115 นภสร ศรีวิโรจน์ ภาษาไทยอาจจะพูดไม่ค่อยชัด แต่ภาษาคอมฯ ไม่ได้เลยค่ะ
            เป็นสาวงามถิ่นซาฟารี ผู้มีความงามตามสรรพสัตว์ ผิวดำอีกา ตาคล้ำเหมือนเสือโคร่ง โพรงจมูกสิงโต โง่เหมือลา ปากเหมือนหมา นิสัยเหมือนลิง สิงอยู่ตามร้านกาแฟ
            
            <p>ร้านกาแฟร้านนี้ เป็นส่วหนึ่งของรายวิชา 06016422 Internet of Things (IOT) ที่รวบรวมเมนู Coffee &  Non-Coffee ไว้ที่เดียว (แหงล่ะสิ ใครมันจะแยก ทำเพื่อ)
            และเป็นส่วนหนึ่งของการเรียนการสอนของ อาจารย์ผศ.ดร. ปานวิทย์ ธุวะนุติ และ ผู้ช่วยสอน นาย กฤตณัฏฐ์ ศิริพรนพคุณ ในรายวิชานี้ ที่ยั้งไม่เคยลองกาแฟร้านนี้เลย (เศร้า เจ้าของไม่ลงมาดูงาน)
            แต่เชื่อว่าร้านนี้เป็นร้านที่ดีและมีคุณภาพ และเป็นร้านที่เหมาะสำหรับการเรียนรู้เรื่องใหม่ๆ ในรายวิชานี้ และเป็นร้านที่เหมาะสำหรับการทำงาน และเป็นร้านที่เหมาะสำหรับการพักผ่อน (นอนทุกครั้ง สารภาพเลย)</p>
          </p>

          <p className="col-span-2 text-left">


          </p>

          <div>
            <img src={thisisme} alt="me" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center">
        <img src={coffeeImage} alt="Coffee" className="w-full" />
      </section>
    </Layout>
  );
}
