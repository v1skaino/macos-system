type WindowActionsProps = {
  close?: () => void;
  minimize?: () => void;
  maximize?: () => void;
  className?: string;
};

export default function WindowActions({
  close,
  maximize,
  minimize,
  className,
}: Readonly<WindowActionsProps>) {
  return (
    <div className={`flex gap-2 ${className}`}>
      <button
        onClick={close}
        className="flex cursor-default rounded-full outline-none w-3 h-3 bg-red-400"
      />
      <button
        onClick={minimize}
        className="flex cursor-default rounded-full outline-none w-3 h-3 bg-yellow-400"
      />
      <button
        onClick={maximize}
        className="flex cursor-default rounded-full outline-none w-3 h-3 bg-green-500"
      />
    </div>
  );
}
