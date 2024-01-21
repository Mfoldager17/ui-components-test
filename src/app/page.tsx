import Card from "@/components/card/Card";
import CardContent from "@/components/card/CardContent";

export default function Home() {
  return (
    <div className="flex flex-row">

      <Card className="">
        <CardContent className="bg-black">
          <div>
            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
          </div>

        </CardContent>
      </Card>
      <Card className="">
        <CardContent className="bg-black">
          <div>
            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
          </div>
        </CardContent>
      </Card>
      <Card className="">
        <CardContent className="bg-black">
          <div>
            Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test Test
          </div>

        </CardContent>
      </Card>
    </div>
  );
}
