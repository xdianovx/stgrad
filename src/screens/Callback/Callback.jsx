import { TextMd } from "../../components";
import { Input } from "../../ui";
import cn from "classnames";

export const Callback = ({ className }) => {
  return (
    <section className={cn(className, "")}>
      <div className="container">
        <div className="grid grid-cols-2 items-start">
          <span className="text-gray">Новости для вас</span>
          <div className="">
            <TextMd
              text={
                "Заполните форму, что-бы\nмы могли отправлять вам\nна почту самые актуальные\nновости компании"
              }
            />
            <form action="">
              <Input label="test" id={1} />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
