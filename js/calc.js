      function calc(){
        var number = document.forma.number.value;
        var n = document.forma.n.value;
        var result = Math.pow(number, n);
        document.forma.result.value=result;
      }