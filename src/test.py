import numpy as np,cv2;

# def main(args):
n=(300,300);
k= np.full(n,150);
# M,N = k.shape;

k = np.pad(k, pad_width = 50, mode="constant", constant_values = 255);

cv2.imshow('tata',k);


# cv2.imwrite('tata.png',k)

cv2.waitKey(0);



# if __name__ == '__main__':
#     import sys;
#     sys.exit(main(sys.argv))