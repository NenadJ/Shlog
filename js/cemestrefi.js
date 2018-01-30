function Slog() {
  console.log('Created');
}

Slog.prototype.log = (data) => {
  console.log(data ? data : 'pera');
};

Slog.prototype.tasadkojmojneradi = (data) => {
  console.log(data ? data : 'pera');
  debugger;
};

const sh = new Slog();