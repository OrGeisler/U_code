import pytest

def sum(num1, num2):
  return num1 + num2

@pytest.mark.xfail
def test_sum_with_zero():
  assert sum(0, 1) == 2, "Test failed! Wrong total when adding regular number with zero" 

def test_sum_regular():
  assert sum(1,2) == 3, "Test failed! Wrong total when adding two regular numbers" 

@pytest.mark.xfail
def test_fail():
  assert 1 == 0

@pytest.mark.sanity
def test_success():
  assert 1==1

@pytest.mark.skip
def test_sum1():
  assert 1 + 2 == 3

@pytest.mark.skip
def test_sum2():
  assert 1 + 2 == 4 

@pytest.mark.parametrize("num1, num2, num3", [(1, 2, 3), (1, 11, 12)]) 
def test_sum(num1, num2, num3):
  assert num1 + num2 == num3, "Got error in test_sum!" 