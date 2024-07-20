let expression = '';

        function append(value) {
            if (value === '.') {
                if (expression.endsWith('.') || expression.split(/[\+\-\*\/]/).pop().includes('.')) return;
            }
            if ('+-*/'.includes(value)) {
                if ('+-*/'.includes(expression.slice(-1))) return;
            }
            if (expression === '0' && !isNaN(value)) {
                expression = value;
            } else {
                expression += value;
            }
            document.getElementById('result').value = expression;
        }

        function calculate() {
            try {
                const result = eval(expression);
                document.getElementById('result').value = result;
                expression = result.toString();
            } catch (e) {
                document.getElementById('result').value = 'エラー';
                expression = '';
            }
        }

        function clearResult() {
            expression = '';
            document.getElementById('result').value = '';
        }